import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-delete-music-popup',
  templateUrl: './delete-music-popup.component.html',
  styleUrls: ['./delete-music-popup.component.scss']
})
export class DeleteMusicPopupComponent {

  constructor( 
    private dialogRef: MatDialogRef<DeleteMusicPopupComponent>,
    private musicService: MusicService,
		@Inject(MAT_DIALOG_DATA) public data: { musicList: number[] }
  ) { }

  public deleteMusic() {
    this.dialogRef.close(this.musicService.deleteMusic(this.data.musicList));
  }

}
