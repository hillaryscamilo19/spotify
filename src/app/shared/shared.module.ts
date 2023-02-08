import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserheaderComponent } from './components/userheader/userheader.component';
import { MediaplayerComponent } from './components/mediaplayer/mediaplayer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';



@NgModule({
  declarations: [
    UserheaderComponent,
    MediaplayerComponent,
    SideBarComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBarComponent,
    UserheaderComponent,
    MediaplayerComponent,
    SectionGenericComponent,
  ]
})
export class SharedModule { }
