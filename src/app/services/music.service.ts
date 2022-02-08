import { Injectable } from '@angular/core';
import { IMusic } from '../utils/interfaces/music';

@Injectable({
  providedIn: 'root'
})
/**
* Servicio utilizado como fuente de datos para la lista de música.
*/
export class MusicService {

  private defaultMusicList: IMusic[] = [
    {
      id: 1,
      artista: 'Juan Talavera',
      cancion: 'Ya te olvidé',
      duracion: 340,
      album: '100 años'
    },
    {
      id: 2,
      artista: 'Luciano Battisti',
      cancion: 'La cinta rosa',
      duracion: 973,
      album: 'Romántica'
    },
    {
      id: 3,
      artista: 'Dyango',
      cancion: 'Esta noche quiero Brandy',
      duracion: 310,
      album: 'Romántica'
    },
    {
      id: 4,
      artista: 'Mercedes Quijo',
      cancion: 'Adios',
      duracion: 183,
      album: 'Mil adioses'
    },
    {
      id: 5,
      artista: 'Juana De Arco',
      cancion: 'Un abrazo',
      duracion: 344,
      album: 'Medieval'
    },
    {
      id: 6,
      artista: 'Gian Pagliaro',
      cancion: 'No te vayas entonces',
      duracion: 316,
      album: 'Romántica'
    },
    {
      id: 7,
      artista: 'Roberto Carlos',
      cancion: 'Cama y mesa',
      duracion: 616,
      album: 'Romántica'
    },
    {
      id: 8,
      artista: 'Roberto Carlos',
      cancion: 'Amigo',
      duracion: 264,
      album: 'Romántica'
    },
    {
      id: 9,
      artista: 'Bad Bunny',
      cancion: 'Ah Ah, Eh',
      duracion: 382,
      album: 'Trap'
    },
    {
      id: 10,
      artista: 'Las Ketchup',
      cancion: 'Aserejé',
      duracion: 211,
      album: 'Infancia'
    }
  ];
  private _musicCount: number = 11;
  private _musicList: IMusic[] = this.defaultMusicList;

  constructor() { 
    this.verifyLocalStorage();
  }

  /**
  * Retorna la lista de música almacenada.
  * @returns Lista de música.
  */
  get musicList(): IMusic[]{
    return [ ...this._musicList ];
  }

  /**
  * Retorna el identificador del próximo elemento en ser agregado.
  * @returns número del identificador.
  */
  get musicCount(): number{
    return this._musicCount;
  }

  /**
  * Actualiza los datos de la lista y el contador de la lista en el LocalStorage.
  * @returns void
  */
  private updateLocalStorage(): void {
    localStorage.setItem("musicList", JSON.stringify(this._musicList));
    localStorage.setItem("musicCount", JSON.stringify(this._musicCount));
  }

  /**
  * Verifica si existen datos en el localStorage para asignarlos al servicio.
  * @returns void
  */
  private verifyLocalStorage(): void {
    const musicList = localStorage.getItem("musicList");
    const musicCount = localStorage.getItem("musicCount");
    
    if(musicList) this._musicList = JSON.parse(musicList);
    if(musicCount) this._musicCount = JSON.parse(musicCount);
  }

  /**
  * Permite obtener el índice concreto de la música a partir de su identificador..
  * @returns Índice del elemento. En caso de no encontrarlo, retonará -1
  */
  private getMusicIndexById( musicId: number ): number {
    return this._musicList.findIndex(music => music.id === musicId);
  }

  /**
  * Permite insertar una canción según los datos enviados.
  * @param musicData Data para la creación de la canción.
  * @returns Retorna la lista completa de canciones almacenadas en el servicio.
  */
  public addMusic( musicData: IMusic ): IMusic[] {
    musicData.id = this._musicCount;
    this._musicCount++;
    this._musicList.push(musicData);

    this.updateLocalStorage();
    return this.musicList;
  }

  /**
  * Permite eliminar una serie de canciones a partir de sus identificadores.
  * @param musicId Array de identificadores que se desean eliminar.
  * @returns Retorna la lista completa de canciones almacenadas en el servicio.
  */
  public deleteMusic( musicId: number[] ): IMusic[] {
    musicId.forEach(_id => {
      const musicIndex: number = this.getMusicIndexById(_id);
      if ( musicIndex != -1) this._musicList.splice( musicIndex, 1 );
    });
    
    this.updateLocalStorage();
    return this.musicList;
  }

  /**
  * Permite actualizar una canción según los datos enviados.
  * @param musicData Data para la actualización de la canción.
  * @returns Retorna la lista completa de canciones almacenadas en el servicio.
  */
  public updateMusic( musicData: IMusic ): IMusic[] {
    const musicIndex: number = this.getMusicIndexById( musicData.id );
    this._musicList[musicIndex] = musicData;

    this.updateLocalStorage();
    return this.musicList;
  }

}
