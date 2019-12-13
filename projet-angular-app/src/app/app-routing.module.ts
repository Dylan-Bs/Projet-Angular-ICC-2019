import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Composants
import { AccueilComponent } from './accueil/accueil.component';
import { CollecteComponent } from './collecte/collecte.component';
import { RgpdComponent } from './rgpd/rgpd.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { Erreur404Component } from './erreur404/erreur404.component';
// Guards
import { AuthGuard } from './services/auth.guard';
import { AdminGuard } from './services/admin.guard';
import { ProfGuard } from './services/prof.guard';


const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'formulaire', component: CollecteComponent },
  { path: 'rgpd', component: RgpdComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'extranet', loadChildren: () => import('./extranet/extranet.module').then(m => m.ExtranetModule) },
  { path: '**', component: Erreur404Component }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AdminGuard, ProfGuard]
})
export class AppRoutingModule { }
