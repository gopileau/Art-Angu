import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liste-artisans',
  templateUrl: './liste-artisans.component.html',
  styleUrls: ['./liste-artisans.component.css']
})
export class ListeArtisansComponent implements OnInit {
  @Input() category: string = 'Bâtiment';
  @Output() categoryChange = new EventEmitter<string>();
  artisans: any[] = [];

  constructor(private searchService: SearchService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeData = this.route.snapshot.data as any;
    this.category = routeData.category;
    this.loadArtisans();
    this.route.data.subscribe((data: any) => {
      this.category = data.category;
      this.loadArtisans();
    });
  }

  loadArtisans(): void {
    console.log("Loading artisans...");
    const allArtisans = this.searchService.getArtisans();
    this.artisans = allArtisans.filter(artisan => artisan.category === this.category); // Filtrer par catégorie
    this.artisans.forEach(artisan => {
      artisan.stars = this.searchService.generateStars(artisan.rating);
    });
  }
  
  changeCategory(category: string) {
    this.category = category;
    this.categoryChange.emit(category);
    this.loadArtisans();
  }

  searchArtisans(event: Event): void {
    const query = (event.target as HTMLInputElement).value;
    const searchResult = this.searchService.searchArtisans(query);
    if (searchResult.length > 0) {
      this.artisans = searchResult;
      this.artisans.forEach(artisan => {
        artisan.stars = this.searchService.generateStars(artisan);
      });
    }
  }
}




  



























