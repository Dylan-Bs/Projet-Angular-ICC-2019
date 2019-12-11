import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CollecteComponent } from './collecte/collecte.component';
import { RgpdComponent } from './rgpd/rgpd.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { ConnexionService } from './services/connexion.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatSliderModule, MatDialogModule, MatSelectModule, MatCheckboxModule, MatToolbarModule, MatIconModule } from '@angular/material';
// import { GestionDesComptesComponent } from './extranet/admin/gestion-des-comptes/gestion-des-comptes.component';
import { ListeEtudComponent } from './extranet/prof/liste-etud/liste-etud.component';
import { EditionComponent } from './extranet/etudiant/edition/edition.component';
import { EditionResolver } from './extranet/etudiant/edition/edition.resolver';
// import { StatsComponent } from './extranet/prof/stats/stats.component';
// import { EditUserComponent } from './extranet/admin/edit-user/edit-user.component';
import { EditUserResolver } from './extranet/admin/edit-user/edit-user.resolver';
import { ViewDetailsComponent } from './extranet/prof/view-details/view-details.component';
import { ViewDetailsResolver } from './extranet/prof/view-details/view-details.resolver';
import { AdminModule } from './extranet/admin/admin.module';
import { ProfModule } from './extranet/prof/prof.module';
import { ExtranetfRoutingModule } from './extranet/extranet-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    CollecteComponent,
    RgpdComponent,
    ConnexionComponent,
    Erreur404Component,
    // GestionDesComptesComponent,
    // StatsComponent,
    // EditUserComponent,
    // EditionComponent,
    // ListeEtudComponent,
    // ViewDetailsComponent    
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
    MatSliderModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    // AdminModule,
    ProfModule,
    ExtranetfRoutingModule
  ],
  // providers: [ConnexionService, EditUserResolver, EditionResolver, ViewDetailsResolver],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
