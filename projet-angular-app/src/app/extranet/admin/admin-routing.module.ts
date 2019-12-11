import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionDesComptesComponent } from './gestion-des-comptes/gestion-des-comptes.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditUserResolver } from './edit-user/edit-user.resolver';

const adminRoutes: Routes = [
  { path: '', component: GestionDesComptesComponent },
  { path: 'details/:id', component: EditUserComponent, resolve: { data: EditUserResolver } }
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