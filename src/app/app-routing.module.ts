import { ComponentRef, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ObjetComponent } from './objet/objet.component';
import { AccueilComponent } from './accueil/accueil.component';
import { StarRatingComponentComponent } from './star-rating-component/star-rating-component.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { LocationsComponent } from './locations/locations.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilBisComponent } from './profil-bis/profil-bis.component';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'client', component: ClientComponent },
  { path: 'objet', component: ObjetComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'profil', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'profil0', component: ProfilBisComponent },
  { path: 'star', component: StarRatingComponentComponent },
  { path: 'messagerie', component: MessagerieComponent, canActivate: [AuthGuard] },
  { path: 'locations', component: LocationsComponent, canActivate: [AuthGuard] },
  { path: 'abonnement', component: AbonnementComponent, canActivate: [AuthGuard] },
  { path: 'administrateur', component: AdministrateurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
