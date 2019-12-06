import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditionComponent } from './edition/edition.component';



@NgModule({
  declarations: [EditionComponent],
  imports: [
    CommonModule
  ],
  exports: [EditionComponent]
})
export class EtudiantModule { }
