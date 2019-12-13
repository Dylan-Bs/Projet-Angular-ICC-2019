import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionDesComptesComponent } from './gestion-des-comptes/gestion-des-comptes.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditUserResolver } from './edit-user/edit-user.resolver';
import { paths } from 'src/app/app-paths';

const adminRoutes: Routes = [
  { path: paths.empty, component: GestionDesComptesComponent },
  { path: paths.details_ad, component: EditUserComponent, resolve: { data: EditUserResolver } }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }