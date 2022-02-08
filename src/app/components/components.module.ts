import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { LandingComponent } from './landing/landing.component';
import { MusicComponent } from './music/music.component';
import { WaveComponent } from './wave/wave.component';
import { DeleteMusicPopupComponent } from './music/delete-music-popup/delete-music-popup.component';
import { GeneralMusicPopupComponent } from './music/general-music-popup/general-music-popup.component';



@NgModule({
  declarations: [
    LandingComponent,
    WaveComponent,
    MusicComponent,
    DeleteMusicPopupComponent,
    GeneralMusicPopupComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    LandingComponent,
    MusicComponent,
    WaveComponent
  ]
})
export class ComponentsModule { }
