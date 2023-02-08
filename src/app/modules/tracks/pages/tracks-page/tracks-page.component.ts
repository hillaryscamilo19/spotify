import { Component } from '@angular/core';
import { TracksModules } from '@core/model/tracks.model';
import * as dataRaw from '../../../../data/tracks.json';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent {
  mockTracksList: Array<TracksModules> = [

  ]
  // tracksTrending: Array<TrackModel> = []
  // tracksRandom: Array<TrackModel> = []
  // listObservers$: Array<Subscription> = []

  // constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default
    this.mockTracksList = data
    // this.loadDataAll() //TODO 📌📌
    // this.loadDataRandom() //TODO 📌📌
  }

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
