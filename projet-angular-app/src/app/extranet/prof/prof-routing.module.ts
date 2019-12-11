import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeEtudComponent } from './liste-etud/liste-etud.component';
import { AuthGuard } from 'src/app/services/auth.guard';
import { ProfGuard } from 'src/app/services/prof.guard';
import { StatsComponent } from './stats/stats.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ViewDetailsResolver } from './view-details/view-details.resolver';


const profRoutes: Routes = [
  { path: '', component: ListeEtudComponent },
  { path: 'stats', canActivate: [AuthGuard, ProfGuard], component: StatsComponent },
  { path: 'view/:id', component: ViewDetailsComponent, resolve: { data: ViewDetailsResolver } }
];

@NgModule({
  imports: [
    RouterModule.forChild(profRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProfRoutingModule { }