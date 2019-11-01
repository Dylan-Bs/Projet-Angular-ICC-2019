import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './stats/stats.component';
import { ListeEtudComponent } from './liste-etud/liste-etud.component';



@NgModule({
  declarations: [StatsComponent, ListeEtudComponent],
  imports: [
    CommonModule
  ]
})
export class ProfModule { }
