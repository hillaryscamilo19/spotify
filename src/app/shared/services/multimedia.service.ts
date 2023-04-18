import { EventEmitter, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService implements OnInit{
  [x: string]: any;

  callback: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {

  }


}
