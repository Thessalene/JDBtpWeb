import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SliderComponent } from './HomeElements/slider/slider.component';
import { ClientsComponent } from './clients/clients.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PrestationComponent } from './HomeElements/prestation/prestation.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './HomeElements/gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    ClientsComponent,
    ToolbarComponent,
    PrestationComponent,
    FooterComponent,
    GalleryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
