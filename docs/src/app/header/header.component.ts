import { Component, ViewChild, ElementRef } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  mobileNavVisible: boolean = false;
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>; 
  searchResults: any[] = []; 

  constructor(private searchService: SearchService, private router: Router) { }

  toggleMenu(): void {
    this.mobileNavVisible = !this.mobileNavVisible;
  }

  onKey(event: KeyboardEvent): void {
    const query = this.searchInput.nativeElement.value;
    if (event.key === 'Enter') {
      this.search(query);
    }
  }

  search(query: string): void {
    console.log('Recherche :', query);
    this.searchResults = this.searchService.searchArtisans(query); 
    console.log('Résultats de la recherche :', this.searchResults);
  }

  navigateToArtisanList(artisan: any): void {
    let categoryRoute = '';
    switch(artisan.category) {
      case 'Bâtiment':
        categoryRoute = '/batiment';
        break;
      case 'Services':
        categoryRoute = '/services';
        break;
      case 'Fabrication':
        categoryRoute = '/fabrication';
        break;
      case 'Alimentation':
        categoryRoute = '/alimentation';
        break;
      default:
        categoryRoute = '/liste-artisans';
        break;
    }
    this.router.navigate([categoryRoute], { queryParams: { q: artisan.location } });
  }  
}









































