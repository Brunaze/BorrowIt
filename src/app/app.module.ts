import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ObjetComponent } from './objet/objet.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { StarRatingComponentComponent } from './star-rating-component/star-rating-component.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { LocationsComponent } from './locations/locations.component';
import { ProfilBisComponent } from './profil-bis/profil-bis.component';
import { ProfileComponent } from './profile/profile.component';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';




@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ObjetComponent,
    MenuComponent,
    AccueilComponent,
    StarRatingComponentComponent,
    MessagerieComponent,
    LocationsComponent,
    ProfilBisComponent,
    ProfileComponent,
    AbonnementComponent,
    AdministrateurComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

