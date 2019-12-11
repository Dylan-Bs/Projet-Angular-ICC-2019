import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const extranetRoutes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule) },
  { path: 'etudiant', loadChildren: () => import('./etudiant/etudiant.module').then(mod => mod.EtudiantModule) },
  { path: 'prof', loadChildren: () => import('./prof/prof.module').then(mod => mod.ProfModule) },
];

@NgModule({
  imports: [
    RouterModule.forChild(extranetRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ExtranetfRoutingModule { }