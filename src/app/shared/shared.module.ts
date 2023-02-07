import { AppModule } from './../app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserheaderComponent } from './components/userheader/userheader.component';
import { MediaplayerComponent } from './components/mediaplayer/mediaplayer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';



@NgModule({
  declarations: [
    UserheaderComponent,
    MediaplayerComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBarComponent
  ]
})
export class SharedModule { }
