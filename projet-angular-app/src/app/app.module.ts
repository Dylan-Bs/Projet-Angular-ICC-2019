import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//Formulaire
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatToolbarModule, MatIconModule } from '@angular/material';
//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
//Lecture de fichiers dans les assets
import { HttpClientModule } from '@angular/common/http';
//Composants
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CollecteComponent } from './collecte/collecte.component';
import { RgpdComponent } from './rgpd/rgpd.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { Erreur404Component } from './erreur404/erreur404.component';
//Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtranetfRoutingModule } from './extranet/extranet-routing.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    CollecteComponent,
    RgpdComponent,
    ConnexionComponent,
    Erreur404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    ExtranetfRoutingModule
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
