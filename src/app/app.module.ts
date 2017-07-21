import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GeocodingComponent } from './geocoding/geocoding.component';
import { ReverseGeocodingComponent } from './reverse-geocoding/reverse-geocoding.component';

@NgModule({
  declarations: [
    AppComponent,
    GeocodingComponent,
    ReverseGeocodingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
