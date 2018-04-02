import { ChartJsComponent } from './components/charts/chart-js/chart-js.component';
import { MorrisJsComponent } from './components/charts/morris-js/morris-js.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DataComponent } from './components/data/data.component';
import { CounterComponent } from './components/counter/counter.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'data', component: DataComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'charts/morris-js', component: MorrisJsComponent },
  { path: 'charts/chart-js', component: ChartJsComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
