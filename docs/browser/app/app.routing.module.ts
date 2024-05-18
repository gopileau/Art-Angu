import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListeArtisansComponent } from './liste-artisans/liste-artisans.component';
import { FicheArtisanComponent } from './fiche-artisan/fiche-artisan.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'liste-artisans', component: ListeArtisansComponent },
  { path: 'batiment', component: ListeArtisansComponent, data: { category: 'Bâtiment' } },
  { path: 'services', component: ListeArtisansComponent, data: { category: 'Services' } },
  { path: 'fabrication', component: ListeArtisansComponent, data: { category: 'Fabrication' } },
  { path: 'alimentation', component: ListeArtisansComponent, data: { category: 'Alimentation' } }, 
  { path: 'fiche-artisan/:id/:category', component: FicheArtisanComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




