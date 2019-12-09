import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './stats/stats.component';
import { ListeEtudComponent } from './liste-etud/liste-etud.component';
import { ViewDetailsComponent } from './view-details/view-details.component';



@NgModule({
  declarations: [StatsComponent, ListeEtudComponent, ViewDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class ProfModule { }
