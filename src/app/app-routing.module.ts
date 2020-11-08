import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DevisComponent } from './devis/devis.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PrestationPageComponent } from './prestation-page/prestation-page.component';
import { RealisationsComponent } from './realisations/realisations.component';
import { LegalMentionComponent } from './legal-mention/legal-mention.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'prestations', component:  PrestationPageComponent},
  { path: 'realisations', component: RealisationsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'devis', component: DevisComponent },
  { path: 'legalMention', component: LegalMentionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
