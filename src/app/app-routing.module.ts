import { ComponentRef, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ObjetComponent } from './objet/objet.component';
import { ProfilComponent } from './profil/profil.component';
import { AccueilComponent } from './accueil/accueil.component';
import { StarRatingComponentComponent } from './star-rating-component/star-rating-component.component';

const routes: Routes = [
  { path: 'client', component: ClientComponent },
  { path: 'objet', component: ObjetComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'star', component: StarRatingComponentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
