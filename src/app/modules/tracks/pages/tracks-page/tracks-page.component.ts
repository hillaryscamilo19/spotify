import { Component } from '@angular/core';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent {
  mockTracksList = [
    {
      name: 'Te espere'
    },
    {
      name: 'Ecos de Amor'
    },
    {
      name: 'Segundo Plato'
    }
  ]
  // tracksTrending: Array<TrackModel> = []
  // tracksRandom: Array<TrackModel> = []
  // listObservers$: Array<Subscription> = []

  // constructor(private trackService: TrackService) { }

  // ngOnInit(): void {
  //   this.loadDataAll() //TODO 📌📌
  //   this.loadDataRandom() //TODO 📌📌
  // }

  // async loadDataAll(): Promise<any> {
  //   this.tracksTrending = await this.trackService.getAllTracks$().toPromise()

  // }

  // loadDataRandom(): void {
  //   this.trackService.getAllRandom$()
  //     .subscribe((response: TrackModel[]) => {
  //       this.tracksRandom = response
  //     })
  // }

  ngOnDestroy(): void {

  }
}
