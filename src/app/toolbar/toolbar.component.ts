import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  imagePath = '../assets/logo_jdbtp_001.png';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  myFunction() {
    var x = document.getElementById("myToolbar");
    if (x.className === "toolbar") {
      x.className += " responsive";
    } else {
      x.className = "toolbar";
    }
  }
  
  redirectToHome() {
    this.router.navigate(['./home']);
  }

  redirectToAbout() {
    this.router.navigate(['./about']);
  }

  redirectToPrestations() {
    this.router.navigate(['./prestations']);
  }

  redirectToRealisations() {
    this.router.navigate(['./realisations']);
  }

  redirectToContact() {
    this.router.navigate(['./contact']);
  }

  redirectToDevis() {
    this.router.navigate(['./devis']);
  }

}
