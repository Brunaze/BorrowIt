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

import { EmpruntsComponent } from './emprunts/emprunts.component';

import { AdministrateurComponent } from './administrateur/administrateur.component';
import { AuthGuard } from './services/auth.guard';
import { SignalementComponent } from './signalement/signalement.component';
import { AvisComponent } from './avis/avis.component';
import { AjouterObjetComponent } from './ajouter-objet/ajouter-objet.component';
import { ModifierObjetComponent } from './modifier-objet/modifier-objet.component';

const routes: Routes = [
  { path: 'client', component: ClientComponent },
  { path: 'objet', component: ObjetComponent },
  { path: '', component: AccueilComponent },
  { path: 'profil', component: ProfileComponent},
  { path: 'profil0', component: ProfilBisComponent },
  { path: 'star', component: StarRatingComponentComponent },
  { path: 'emprunts', component: EmpruntsComponent, canActivate: [AuthGuard] },
  { path: 'messagerie', component: MessagerieComponent, canActivate: [AuthGuard] },
  { path: 'locations', component: LocationsComponent, canActivate: [AuthGuard] },
  { path: 'abonnement', component: AbonnementComponent, canActivate: [AuthGuard] },
  { path: 'administrateur', component: AdministrateurComponent, canActivate: [AuthGuard] },
  { path: 'signalement', component: SignalementComponent, canActivate: [AuthGuard] },
  { path: 'avis', component: AvisComponent, canActivate: [AuthGuard] },
  { path: 'ajouter-objet', component: AjouterObjetComponent, canActivate: [AuthGuard] },
  { path: 'modifier-objet', component: ModifierObjetComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
