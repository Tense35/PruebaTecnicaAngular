import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MusicService } from 'src/app/services/music.service';
import { IMusic } from 'src/app/utils/interfaces/music';

@Component({
  selector: 'app-general-music-popup',
  templateUrl: './general-music-popup.component.html',
  styleUrls: ['./general-music-popup.component.scss']
})
export class GeneralMusicPopupComponent {

  public identificator: number = 0;
  public musicForm: FormGroup;

  constructor( 
    private dialogRef: MatDialogRef<GeneralMusicPopupComponent>,
    private musicService: MusicService,
    private fb: FormBuilder,
		@Inject(MAT_DIALOG_DATA) public data: { isUpdate: boolean, music: IMusic },
  ) { 
    this.identificator = this.musicService.musicCount;
    this.musicForm = this.fb.group({
      id:       [{value: (data?.music.id || this.identificator), disabled: true}, [Validators.required, Validators.min(0)]],
      artista:  [data?.music.artista, Validators.required],
      cancion:  [data?.music.cancion, Validators.required],
      duracion: [{value: data?.music.duracion, disabled: this.data.isUpdate }, [Validators.required, Validators.min(0)]],
      album:    [{value: data?.music.album, disabled: this.data.isUpdate }, Validators.required]
    });
  }

  public addMusic() {
    this.dialogRef.close(this.musicService.addMusic(this.musicForm.value));
  }

  public updateMusic() {
    this.dialogRef.close(this.musicService.updateMusic(this.musicForm.getRawValue()));
  }

}
