import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule} from '@angular/material/button';
import { SliderComponent } from './HomeElements/slider/slider.component';
import { ClientsComponent } from './clients/clients.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PrestationComponent } from './HomeElements/prestation/prestation.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './HomeElements/gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Gallery2Component } from './gallery2/gallery2.component';
import { QuoteSlideshowComponent } from './HomeElements/quote-slideshow/quote-slideshow.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { DevisComponent } from './devis/devis.component';
import { MatCardModule } from '@angular/material/card';
import { PrestationPageComponent } from './prestation-page/prestation-page.component';
import { GridComponent } from './grid/grid.component';
import { RealisationsComponent } from './realisations/realisations.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { HttpClientModule } from "@angular/common/http";  
import { SlideComponent } from './slide/slide.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { MaterialToolbarComponent } from './material-toolbar/material-toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    ClientsComponent,
    ToolbarComponent,
    PrestationComponent,
    FooterComponent,
    GalleryComponent,
    HomeComponent,
    AboutComponent,
    Gallery2Component,
    QuoteSlideshowComponent,
    PortfolioComponent,
    ContactComponent,
    DevisComponent,
    PrestationPageComponent,
    GridComponent,
    RealisationsComponent,
    SlideComponent,
    MaterialToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    NgxDropzoneModule,
    HttpClientModule,
    NgImageSliderModule,
    FormsModule,
    MatMenuModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSidenavModule,
    NgbModule,
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
