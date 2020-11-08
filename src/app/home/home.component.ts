import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /* Prestation component data */
  image1 = "../../assets/icons/prestations/construction.png";
  title1 = "Constructions";
  description1="Nous réalisons vos rêves les plus fou de A à Z.";

  image2 = "../../assets/icons/prestations/maintenance.png";
  title2 = "Rénovations";
  description2="Pourquoi construire quand on peut rénover, améliorer, agrandir ?";

  image3 = "../../assets/icons/prestations/worker.png";
  title3 = "Expertise";
  description3="Une équipe pluridisciplinaire à votre écoute.";

  image4 = "../../assets/icons/prestations/quality.png";
  title4 = "Qualité";
  description4 ="La qualité ? On vous l'offre. L'expérience ? Notre point fort.";

  constructor() { }

  ngOnInit(): void {
  }

}
