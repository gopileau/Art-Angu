import { Component, OnInit } from '@angular/core';
import { TopArtisansService } from '../top-artisans.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  topArtisans: any[] = [];
  allArtisans: any[] = []; 

  constructor(private topArtisansService: TopArtisansService) { }

  ngOnInit(): void {
    this.getTopArtisans();
    this.getAllArtisans(); 
  }

  getTopArtisans(): void {
    this.topArtisansService.getTopArtisans()
      .subscribe(artisans => {
        this.topArtisans = artisans.sort((a, b) => b.rating - a.rating);
      });
  }

  getAllArtisans(): void {
    this.topArtisansService.getAllArtisans()
      .subscribe(artisans => this.allArtisans = artisans);
  }
  searchArtisans(query: string): void {
   
  }  

  getStars(rating: number): number[] {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(i);
    }
    return stars;
  }
}


















