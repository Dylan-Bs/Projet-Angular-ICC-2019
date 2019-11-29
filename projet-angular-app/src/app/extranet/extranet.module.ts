import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { ProfModule } from './prof/prof.module';
import { EtudiantModule } from './etudiant/etudiant.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminModule, 
    ProfModule, 
    EtudiantModule 
  ],
  exports: [
    AdminModule
  ]
})
export class ExtranetModule { }
