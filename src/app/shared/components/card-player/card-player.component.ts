import { TracksModules } from '@core/model/tracks.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css'],
})
export class CardPlayerComponent implements OnInit {
  constructor() {}
  @Input() mode: 'small' | 'big' = 'small';
  @Input() track: TracksModules = {
    _id: 0,
    name: '',
    album: '',
    url: '',
    cover: '',
  };
  ngOnInit(): void {}
}
