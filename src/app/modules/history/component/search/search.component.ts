import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Output() callbackData: EventEmitter<any> = new EventEmitter();

  src: string = '';

  ngOnInit(): void {}


  callSearch(term: string): void {
    if (term.length >= 1) {
      this.callbackData.emit(term);
      console.log('🔴 Llamamos a nuestra API HTTP GET---> ', term);
    }
  }


  nameFilter(): void{

  }

}
