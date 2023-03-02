import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ObjetComponent } from './objet/objet.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ConnexionComponent,
    InscriptionComponent,
    ObjetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
