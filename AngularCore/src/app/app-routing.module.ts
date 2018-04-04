import { NotFoundComponent } from './components/not-found/not-found.component';
import { ChartJsComponent } from './components/charts/chart-js/chart-js.component';
import { MorrisJsComponent } from './components/charts/morris-js/morris-js.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DataComponent } from './components/data/data.component';
import { CounterComponent } from './components/counter/counter.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  
  { path: 'counter', component: CounterComponent, canActivate: [AuthGuard] },
  { path: 'data', component: DataComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'charts/morris-js', component: MorrisJsComponent, canActivate: [AuthGuard] },
  { path: 'charts/chart-js', component: ChartJsComponent, canActivate: [AuthGuard] },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
