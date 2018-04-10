import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {
  Http,
  HttpModule,
  RequestOptions,
  ResponseOptions,
  XHRBackend
} from '@angular/http'


import { AppComponent } from './app.component';

// routes
import { ROUTING } from './app.routes'

//module
import { HomeModule } from './home/home.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    ROUTING,
    HttpModule,
    FormsModule
  ],
  providers: [
  	
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
