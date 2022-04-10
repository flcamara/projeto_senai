import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';

import { FormsModule } from '@angular/forms';
import { HotelComponent } from './hotel/hotel.component';
import { PacoteComponent } from './pacote/pacote.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    HotelComponent,
    PacoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
