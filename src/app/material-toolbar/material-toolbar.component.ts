import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {MenuItem} from '../interfaces/menu-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-material-toolbar',
  templateUrl: './material-toolbar.component.html',
  styleUrls: ['./material-toolbar.component.css']
})
export class MaterialToolbarComponent implements OnInit {
  //logo path
  logoPath = '../assets/logo_jdbtp_001.png';


  menuItems: MenuItem[] = [
    {
      label: 'Qui sommes nous ?',
      icon: 'help',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
      redirection : './about'
    },
    {
      label: 'Nos prestations',
      icon: 'loyalty',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
      redirection : './prestations'
    },
    {
      label: 'Nos réalisations',
      icon: 'perm_media',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true,
      redirection : './realisations'
    },
    {
      label: 'Contact',
      icon: 'contact_support',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true,
      redirection : './contact'
    },
    {
      label: 'Demande de devis',
      icon: 'description',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true,
      redirection : './devis'
    }
  ];

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }

  redirectToHome() {
    this.router.navigate(['./home']);
  }

}
