import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  listResults$: Observable<any> = of([])
  constructor(private searchService: SearchService) { }


  ngOnInit(): void {

  }

  receiveData(event: string): void{
    console.log('🎁 Estoy en el padre jua jua...', event);
    this.searchService.searchTracks$(event)
    .subscribe(res => {
      console.log('.......', res);
      this.listResults$ = this.searchService.searchTracks$(event)
    })
  }
}
