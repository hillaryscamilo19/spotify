import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly URL = environment.api
  constructor(private http: HttpClient) { }

  searchTracks$(term: string): Observable<any>{
    return this.http.get(`${this.URL}/tracks?src=${term}`)

  }
}
