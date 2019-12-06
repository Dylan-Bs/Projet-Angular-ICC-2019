import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CollecteComponent } from './collecte/collecte.component';
import { RgpdComponent } from './rgpd/rgpd.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AuthGuard } from './services/auth.guard';
import { AdminGuard } from './services/admin.guard';
import { ProfGuard } from './services/prof.guard';
import { Erreur404Component } from './erreur404/erreur404.component';
// comme je n'arrive pas à faire la route à travers les modules, je crée la route directement
import { GestionDesComptesComponent } from './extranet/admin/gestion-des-comptes/gestion-des-comptes.component';
import { EditionComponent } from './extranet/etudiant/edition/edition.component';
import { StatsComponent } from './extranet/prof/stats/stats.component';
import { EditUserComponent } from './extranet/admin/edit-user/edit-user.component';
import { EditUserResolver } from './extranet/admin/edit-user/edit-user.resolver';


const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'formulaire', component:CollecteComponent},
  {path:'rgpd', component:RgpdComponent},
  {path:'connexion', component:ConnexionComponent},
  //{path:'admin', canActivate: [AuthGuard, AdminGuard], component:GestionDesComptesComponent},
  {path:'stats', canActivate: [AuthGuard, ProfGuard], component:StatsComponent},
  {path:'admin', component:GestionDesComptesComponent}, // pour le dev
  // {path:'stats', component:StatsComponent},
  // {path:'admin', canActivate: [AuthGuard], loadChildren: './extranet/extranet.module#AdminModule' },
  {path: 'details/:id', component: EditUserComponent, resolve:{data : EditUserResolver} },
  {path: 'edit/:id', component: EditionComponent, resolve:{data : EditUserResolver} },
  {path:'**', component:Erreur404Component}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AdminGuard, ProfGuard]
})
export class AppRoutingModule { }
