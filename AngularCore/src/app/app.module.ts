import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { ValuesService } from './services/values.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DataComponent } from './components/data/data.component';
import { CounterComponent } from './components/counter/counter.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IconCardComponent } from './components/dashboard/icon-card/icon-card.component';

import { ChartJsComponent } from './components/charts/chart-js/chart-js.component';
import { MorrisJsComponent } from './components/charts/morris-js/morris-js.component';

import { MorrisAreaChartComponent } from './components/charts/morris-js/area-chart/area-chart.component';
import { MorrisBarChartComponent } from './components/charts/morris-js/bar-chart/bar-chart.component';
import { MorrisDonutChartComponent } from './components/charts/morris-js/donut-chart/donut-chart.component';

import { ChartJsAreaChartComponent } from './components/charts/chart-js/area-chart/area-chart.component';
import { ChartJsBarChartComponent } from './components/charts/chart-js/bar-chart/bar-chart.component';
import { ChartJsPieChartComponent } from './components/charts/chart-js/pie-chart/pie-chart.component';

import { FooterComponent } from './components/footer/footer.component';
import { NavItemComponent } from './components/navbar/nav-item/nav-item.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { AuthService } from './services/auth.service';

// TODO: Deprecated, need to remove!!!
import { HttpModule } from '@angular/http';

import { RegisterService } from './services/register.service';
import { AlertService } from './services/alert.service';
import { AuthGuard } from './guards/auth.guard';
import { NonAuthGuard } from './guards/non-auth.guard';

//import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DataComponent,
    CounterComponent,
    DashboardComponent,
    IconCardComponent,
    MorrisAreaChartComponent,
    MorrisBarChartComponent,
    MorrisDonutChartComponent,
    ChartJsAreaChartComponent,
    ChartJsBarChartComponent,
    ChartJsPieChartComponent,
    FooterComponent,
    NavItemComponent,
    ChartJsComponent,
    MorrisJsComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
    NotAuthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    // TODO: Deprecated, need to remove
    HttpModule,

    //ChartsModule
  ],
  providers: [ValuesService, AuthService, RegisterService, AlertService, AuthGuard, NonAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
