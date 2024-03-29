import { TracksModule } from './../../../modules/tracks/tracks.module';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { TracksModules } from '@core/model/tracks.model';

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.css']
})
export class MediaplayerComponent implements OnInit, OnDestroy {
  mockCover: TracksModules = {
    cover: 'https://i.ytimg.com/vi/B_1YBFttefY/maxresdefault.jpg',
    name: 'Te Espere',
    album: 'Jesse & Joy ',
    url: 'http://localhost/Tracks.mp3',
    _id: 1

  }

  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')
  ListObservers$: Array<Subscription> = []
  state: string = 'paused'

  constructor(){}
  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

}
