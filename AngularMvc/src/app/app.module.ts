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
import { BadgeComponent } from './components/dashboard/badge/badge.component';
import { AreaChartComponent } from './components/dashboard/charts/area-chart/area-chart.component';
import { BarChartComponent } from './components/dashboard/charts/bar-chart/bar-chart.component';
import { DonutChartComponent } from './components/dashboard/charts/donut-chart/donut-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DataComponent,
    CounterComponent,
    DashboardComponent,
    BadgeComponent,
    AreaChartComponent,
    BarChartComponent,
    DonutChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ValuesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
