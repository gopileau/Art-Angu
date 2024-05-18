import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fiche-artisan',
  templateUrl: './fiche-artisan.component.html',
  styleUrls: ['./fiche-artisan.component.css']
})
export class FicheArtisanComponent implements OnInit {
  artisan: any = {};
  contactForm: any = {}; 

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private http: HttpClient 
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const artisanId = +params['id']; 
      const category = params['category']; 
      this.loadArtisanDetails(artisanId);
    });
  }

  loadArtisanDetails(artisanId: number): void {
    this.artisan = this.searchService.getArtisanDetails(artisanId); 
  }

  sendEmail(): void {
    console.log('Données d\'e-mail:', this.contactForm);
    console.log('Artisan:', this.artisan);

    const emailData = {
      name: this.contactForm.name,
      subject: this.contactForm.subject,
      message: this.contactForm.message,
      artisanName: this.artisan.name,
      artisanId: this.artisan.id
    };
    this.contactForm = {};
    this.http.post<any>('http://localhost:1080/email', emailData).subscribe(
      response => {
        console.log('E-mail envoyé avec succès :', response);
        this.contactForm = {};
      },
      error => {
        console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
      }
    );
  }
}






 








