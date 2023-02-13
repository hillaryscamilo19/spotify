import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../data/tracks.json';
import { TracksModules } from '@core/model/tracks.model';


@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit{
  tracks: TracksModules [] = []
  constructor(){}

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default
    this.tracks = data
  }

}
