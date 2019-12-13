import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CollecteComponent } from './collecte/collecte.component';
import { RgpdComponent } from './rgpd/rgpd.component';
import { ConnexionComponent } from './connexion/connexion.component';
// Guards
import { AuthGuard } from './services/auth.guard';
import { AdminGuard } from './services/admin.guard';
import { ProfGuard } from './services/prof.guard';
import { Erreur404Component } from './erreur404/erreur404.component';
// comme je n'arrive pas à faire la route à travers les modules, je crée la route directement
// etudiants
import { EditionComponent } from './extranet/etudiant/edition/edition.component';
import { EditionResolver } from './extranet/etudiant/edition/edition.resolver';
// prof
import { ListeEtudComponent } from './extranet/prof/liste-etud/liste-etud.component';
import { StatsComponent } from './extranet/prof/stats/stats.component';
import { ViewDetailsComponent } from './extranet/prof/view-details/view-details.component';
import { ViewDetailsResolver } from './extranet/prof/view-details/view-details.resolver';
// admin
import { GestionDesComptesComponent } from './extranet/admin/gestion-des-comptes/gestion-des-comptes.component';
import { EditUserComponent } from './extranet/admin/edit-user/edit-user.component';
import { EditUserResolver } from './extranet/admin/edit-user/edit-user.resolver';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'formulaire', component: CollecteComponent },
  { path: 'rgpd', component: RgpdComponent },
  { path: 'connexion', component: ConnexionComponent },
  // { path: 'edit/:id', component: EditionComponent, resolve: { data: EditionResolver } },
  // {path:'stats', component:StatsComponent},
  // { path: 'stats', canActivate: [AuthGuard, ProfGuard], component: StatsComponent },
  // { path: 'prof', canActivate: [AuthGuard, ProfGuard], component: ListeEtudComponent },
  // { path: 'view/:id', component: ViewDetailsComponent, resolve: { data: ViewDetailsResolver } },
  // { path:'admin', loadChildren: () => import('./extranet/admin/admin.module').then(mod => mod.AdminModule)},
  // { path:'etudiant', loadChildren: () => import('./extranet/etudiant/etudiant.module').then(mod => mod.EtudiantModule)},
  // { path:'prof', loadChildren: () => import('./extranet/prof/prof.module').then(mod => mod.ProfModule)},
  { path:'extranet', loadChildren: () => import('./extranet/extranet.module').then(m => m.ExtranetModule)},
  // { path: 'admin', component: GestionDesComptesComponent }, // pour le dev
  // {path:'admin', canActivate: [AuthGuard, AdminGuard], component:GestionDesComptesComponent},
  // { path: 'details/:id', component: EditUserComponent, resolve: { data: EditUserResolver } },
  { path: '**', component: Erreur404Component }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AdminGuard, ProfGuard]
})
export class AppRoutingModule { }
