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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DataComponent,
    CounterComponent
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
