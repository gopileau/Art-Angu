import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopArtisansService {
  private topArtisansUrl = 'assets/top-artisans.json'; 

  constructor(private http: HttpClient) { }

  getTopArtisans(): Observable<any[]> {
    return this.http.get<any[]>(this.topArtisansUrl);
  }

  getAllArtisans(): Observable<any[]> {
    
    return this.http.get<any[]>(this.topArtisansUrl);
  }
}



