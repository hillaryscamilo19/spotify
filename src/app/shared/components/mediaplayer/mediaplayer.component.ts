import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';
import { TrackModel } from './../../../core/model/tracks.model';

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.css']
})
export class MediaplayerComponent implements OnInit, OnDestroy {
  mockCover: TrackModel = {
    cover: 'https://i.ytimg.com/vi/B_1YBFttefY/maxresdefault.jpg',
    name: 'Te Espere',
    album: 'Jesse & Joy ',
    url: 'http://localhost/Tracks.mp3',
    _id: 1

  }

  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')
  ListObservers$: Array<Subscription> = []
  state: string = 'paused'

  constructor(private multimedia: MultimediaService){}
  ngOnInit(): void {
    const observer1$: Subscription = this.multimedia.callback.subscribe(
      (response:TrackModel) =>{
        console.log('Recibiendo cancion', response);

      }
    )

    this.ListObservers$ = [observer1$]

  }

  ngOnDestroy(): void {
    this.ListObservers$.forEach(u => u.unsubscribe())
    console.log('BOOM!');

  }

}
