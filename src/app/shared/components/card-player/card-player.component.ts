import { TrackModel } from './../../../core/model/tracks.model';
import { Component, Input, OnInit } from '@angular/core';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css'],
})
export class CardPlayerComponent implements OnInit {

  constructor(private multimedia: MultimediaService) {}

  @Input() mode: 'small' | 'big' = 'small';
  @Input() track: TrackModel= {
    _id: 0,
    name: '',
    album: '',
    url: '',
    cover: '',
  };
  ngOnInit(): void {}

  sendPlay(track: TrackModel): void{
    this.multimedia.callback.emit(track)
  }
}
