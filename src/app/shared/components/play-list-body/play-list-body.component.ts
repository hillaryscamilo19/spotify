import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from './../../../core/model/tracks.model';


@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit{
  @Input() trackss:  TrackModel[] = []
  @Input() tracks = ''
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }

  constructor(){}

  ngOnInit(): void {
  }

  ChangeSort(property:string):void{

    const {order} = this.optionSort
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
    console.log(this.optionSort);
  }



}
