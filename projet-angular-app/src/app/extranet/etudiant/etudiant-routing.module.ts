import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditionComponent } from './edition/edition.component';
import { EditionResolver } from './edition/edition.resolver';



const etudiantRoutes: Routes = [
    {
      path: 'edit/:id',
      component: EditionComponent,
      resolve: { data: EditionResolver },
    }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(etudiantRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class EtudiantRoutingModule {}