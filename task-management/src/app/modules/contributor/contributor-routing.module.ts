import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContributorDashboardComponent } from './components/contributor-dashboard/contributor-dashboard.component';

const routes: Routes = [
  {path:'', component: ContributorDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContributorRoutingModule { }
