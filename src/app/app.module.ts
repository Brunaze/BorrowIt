import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ObjetComponent } from './objet/objet.component';
import { MenuComponent } from './menu/menu.component';
import { ProfilComponent } from './profil/profil.component';
import { AccueilComponent } from './accueil/accueil.component';
import { StarRatingComponentComponent } from './star-rating-component/star-rating-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ObjetComponent,
    MenuComponent,
    ProfilComponent,
    AccueilComponent,
    StarRatingComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
