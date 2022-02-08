import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { DeleteMusicPopupComponent } from './delete-music-popup/delete-music-popup.component';
import { GeneralMusicPopupComponent } from './general-music-popup/general-music-popup.component';
import { IMusic } from 'src/app/utils/interfaces/music';
import { MusicService } from 'src/app/services/music.service';

@Component({
	selector: 'app-music',
	templateUrl: './music.component.html',
	styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

	public dataSource: MatTableDataSource<IMusic> = new MatTableDataSource<IMusic>([]);
	public displayedColumns: string[] = [
		'seleccion',
		'id',
		'artista',
		'cancion',
		'duracion',
		'album',
		'acciones',
	];
	public selection = new SelectionModel<IMusic>(true, []);

	constructor(private dialog: MatDialog, private musicService: MusicService) { }

	ngOnInit(): void {
		this.dataSource.data = this.musicService.musicList;
	}

	public addOrUpdateMusic(isUpdate: boolean = false, music: IMusic | object = {}): void {

		const dialogRef = this.dialog.open(GeneralMusicPopupComponent, {
			width: '500px',
			height: '600px',
			data: {
				isUpdate,
				music
			}
		});
		
		dialogRef.afterClosed().subscribe((result) => {
			if (result) this.dataSource.data = result;
			this.clearSelection();
		});
	}

	public deleteMusic( musicData: number = -1 ): void {

		const musicList = ( this.selection.isEmpty() )
		? [musicData]
		: this.selection.selected.map(music => music.id);

		const dialogRef = this.dialog.open(DeleteMusicPopupComponent, {
			width: '350px',
			height: '300px',
			data: {
				musicList
			}
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (result) this.dataSource.data = result;
			this.clearSelection();
		});
	}

	public musicSearch( searchTerm: string ): void {
		this.dataSource.filter = searchTerm.trim().toLocaleLowerCase();
	}

	public isAllSelected(): boolean {
		const numSelected = this.selection.selected.length;
		const numRows = this.dataSource.data.length;
		return numSelected === numRows;
	}

	public masterToggle() {
		this.isAllSelected()
		? this.selection.clear()
		: this.dataSource.data.forEach((row) => this.selection.select(row));
	}

	public clearSelection(): void {
		this.selection.clear();
	}

}
