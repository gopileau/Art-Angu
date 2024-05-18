import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  artisans: any[] = [
    { id: 1, name: 'Charles', rating: 4, speciality: 'Menuisier', location: 'Lyon', category: 'Bâtiment' },
    { id: 2, name: 'Thomas', rating: 5, speciality: 'Électricien', location: 'Paris', category: 'Services' },
    { id: 3, name: 'Paulo', rating: 2, speciality: 'Plombier', location: 'Reims', category: 'Fabrication' },
    { id: 4, name: 'Philip', rating: 3, speciality: 'Cuisinier', location: 'Toulouse', category: 'Alimentation' }
  ];
  constructor() { }
  getArtisanDetails(artisanId: number): any {
    return this.artisans.find(artisan => artisan.id === artisanId);
  }

  getArtisans(): any[] {

    return [
      { name: 'Charles', rating: 4, speciality: 'Menuisier', location: 'Lyon', category: 'Bâtiment', id: 1 },
      { name: 'Thomas', rating: 5, speciality: 'Électricien', location: 'Paris', category: 'Services', id: 2 },
      { name: 'Paulo', rating: 3, speciality: 'Plombier', location: 'Reims', category: 'Fabrication', id: 3 },
      { name: 'Philip', rating: 2, speciality: 'Cuisinier', location: 'Toulouse', category: 'Alimentation', id: 4 },
    ];
  }
  generateStars(rating: number): boolean[] {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < rating);
    }
    return stars;
  }
  
  searchArtisans(query: string): any[] {
    const allArtisans = this.getArtisans();
    return allArtisans.filter(artisan =>
      artisan.name.toLowerCase().includes(query.toLowerCase()) ||
      artisan.speciality.toLowerCase().includes(query.toLowerCase()) ||
      artisan.location.toLowerCase().includes(query.toLowerCase())
    );
  }
}



