import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.css']
})
export class MediaplayerComponent implements OnInit, OnDestroy {
  mockCover: any = {
    cover: 'https://i.ytimg.com/vi/B_1YBFttefY/maxresdefault.jpg',
    name: 'Te Espere',
    album: 'Jesse & Joy '

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
