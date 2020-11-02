import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-realisations',
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.css']
})
export class RealisationsComponent implements OnInit {

  renovation = "renovation";
  construction = "construction";
  other = "other";

  title_001 = "Villa F3 - 120 m2 - Le Robert";
  description_001 = "Terrassement d’une villa F3, 2 chambres, séjour, salle de bain, cuisine, buanderie.";
  text_side_001 = "left";
  photoPaths_001: Array<object> = [{
    image: "../../assets//chantiers/robert/F5_Robert_001-001.jpg",
    thumbImage: "../../assets//chantiers/robert/F5_Robert_001-001.jpg",
    alt: '',
    title: ''
  }, {
    image: "../../assets//chantiers/robert/F5_Robert_001-002.jpg",
    thumbImage: "../../assets//chantiers/robert/F5_Robert_001-002.jpg",
    alt: '',
    title: ''
  }];

  title_002 = "Fond de forme Dalle - Schoelcher";
  description_002 = "Fond de forme Dalle avec mise en place d'un film anti-thermite";
  text_side_002 = "right";
  photoPaths_002: Array<object> = [{
    image: "../../assets/chantiers/fond-de-forme-dalle-avec-mise-en-place-film-anti-thermite_SCHOELCHER/001.jpg",
    thumbImage: "../../assets/chantiers/fond-de-forme-dalle-avec-mise-en-place-film-anti-thermite_SCHOELCHER/001.jpg",
    alt: 'Film anti-thermite',
    title: 'Film anti-thermite'
  }, {
    image: "../../assets/chantiers/fond-de-forme-dalle-avec-mise-en-place-film-anti-thermite_SCHOELCHER/002.jpg",
    thumbImage: "../../assets/chantiers/fond-de-forme-dalle-avec-mise-en-place-film-anti-thermite_SCHOELCHER/002.jpg",
    alt: 'Film anti-thermite',
    title: 'Film anti-thermite'
  }, {
    image: "../../assets/chantiers/fond-de-forme-dalle-avec-mise-en-place-film-anti-thermite_SCHOELCHER/003.jpg",
    thumbImage: "../../assets/chantiers/fond-de-forme-dalle-avec-mise-en-place-film-anti-thermite_SCHOELCHER/003.jpg",
    alt: 'Film anti-thermite',
    title: 'Film anti-thermite'
  }, {
    image: "../../assets/chantiers/fond-de-forme-dalle-avec-mise-en-place-film-anti-thermite_SCHOELCHER/004.jpg",
    thumbImage: "../../assets/chantiers/fond-de-forme-dalle-avec-mise-en-place-film-anti-thermite_SCHOELCHER/004.jpg",
    alt: 'Film anti-thermite',
    title: 'Film anti-thermite'
  },
  ];

  title_003 = "Pose de fosse septique- Le Robert";
  description_003 = "";
  text_side_003 = "left";
  photoPaths_003: Array<object> = [{
    image: "../../assets/chantiers/pose-fosse-septique_Robert/001.jpg",
    thumbImage: "../../assets/chantiers/pose-fosse-septique_Robert/001.jpg",
    alt: 'Fosse septique',
    title: 'Fosse septique'
  }, {
    image: "../../assets/chantiers/pose-fosse-septique_Robert/002.jpg",
    thumbImage: "../../assets/chantiers/pose-fosse-septique_Robert/002.jpg",
    alt: 'Fosse septique',
    title: 'Fosse septique'
  }, {
    image: "../../assets/chantiers/pose-fosse-septique_Robert/003.jpg",
    thumbImage: "../../assets/chantiers/pose-fosse-septique_Robert/003.jpg",
    alt: 'Fosse septique',
    title: 'Fosse septique'
  }, {
    image: "../../assets/chantiers/pose-fosse-septique_Robert/005.jpg",
    thumbImage: "../../assets/chantiers/pose-fosse-septique_Robert/005.jpg",
    alt: 'Fosse septique',
    title: 'Fosse septique'
  }, {
    image: "../../assets/chantiers/pose-fosse-septique_Robert/006.jpg",
    thumbImage: "../../assets/chantiers/pose-fosse-septique_Robert/006.jpg",
    alt: 'Fosse septique',
    title: 'Fosse septique'
  }
  ];

  title_004 = "Préparation coffrage long grine - Fort-de-France";
  description_004 = "";
  text_side_004 = "right";
  photoPaths_004: Array<object> = [{
    image: "../../assets/chantiers/preparation-coffrage-long-grine-FDF/001.jpg",
    thumbImage: "../../assets/chantiers/preparation-coffrage-long-grine-FDF/001.jpg",
    alt: '',
    title: 'Coffrage long grine'
  }, {
    image: "../../assets/chantiers/preparation-coffrage-long-grine-FDF/001.jpg",
    thumbImage: "../../assets/chantiers/preparation-coffrage-long-grine-FDF/001.jpg",
    alt: '',
    title: ''
  }, {
    image: "../../assets/chantiers/preparation-coffrage-long-grine-FDF/003.jpg",
    thumbImage: "../../assets/chantiers/preparation-coffrage-long-grine-FDF/003.jpg",
    alt: '',
    title: ''
  },
  ];


  title_005 = "Préparation fond de forme (route) - Fort-de-France";
  description_005 = "";
  text_side_005 = "left";
  photoPaths_005: Array<object> = [{
    image: ".../../assets/chantiers/preparation-fond-de-forme-route-Fdf/001.jpg",
    thumbImage: "../../assets/chantiers/preparation-fond-de-forme-route-Fdf/001.jpg",
    alt: '',
    title: ''
  }, {
    image: ".../../assets/chantiers/preparation-fond-de-forme-route-Fdf/002.jpg",
    thumbImage: "../../assets/chantiers/preparation-fond-de-forme-route-Fdf/002.jpg",
    alt: '',
    title: ''
  }, {
    image: ".../../assets/chantiers/preparation-fond-de-forme-route-Fdf/003.jpg",
    thumbImage: "../../assets/chantiers/preparation-fond-de-forme-route-Fdf/003.jpg",
    alt: '',
    title: ''
  }, {
    image: ".../../assets/chantiers/preparation-fond-de-forme-route-Fdf/004.jpg",
    thumbImage: "../../assets/chantiers/preparation-fond-de-forme-route-Fdf/004.jpg",
    alt: '',
    title: ''
  }, {
    image: ".../../assets/chantiers/preparation-fond-de-forme-route-Fdf/005.jpg",
    thumbImage: "../../assets/chantiers/preparation-fond-de-forme-route-Fdf/005.jpg",
    alt: '',
    title: ''
  }, {
    image: ".../../assets/chantiers/preparation-fond-de-forme-route-Fdf/006.jpg",
    thumbImage: "../../assets/chantiers/preparation-fond-de-forme-route-Fdf/006.jpg",
    alt: '',
    title: ''
  },
  ];

  title_006 = "Raccordement fosse septique - Robert";
  description_006 = "";
  text_side_006 = "right";
  photoPaths_006: Array<object> = [{
    image: "../../assets/chantiers/Raccordement-fosse-septique-Robert/003.jpg",
    thumbImage: "../../assets/chantiers/Raccordement-fosse-septique-Robert/003.jpg",
    alt: '',
    title: ''
  }, {
    image: "../../assets/chantiers/Raccordement-fosse-septique-Robert/004.jpg",
    thumbImage: "../../assets/chantiers/Raccordement-fosse-septique-Robert/004.jpg",
    alt: '',
    title: ''
  }, {
    image: "../../assets/chantiers/Raccordement-fosse-septique-Robert/005.jpg",
    thumbImage: "../../assets/chantiers/Raccordement-fosse-septique-Robert/005.jpg",
    alt: '',
    title: ''
  }, {
    image: "../../assets/chantiers/Raccordement-fosse-septique-Robert/006.jpg",
    thumbImage: "../../assets/chantiers/Raccordement-fosse-septique-Robert/006.jpg",
    alt: '',
    title: ''
  }, {
    image: "../../assets/chantiers/Raccordement-fosse-septique-Robert/007.jpg",
    thumbImage: "../../assets/chantiers/Raccordement-fosse-septique-Robert/007.jpg",
    alt: '',
    title: ''
  },
  ];

  title_007 = "Rénovation sous-dalle d'une villa - Fort-de-France";
  description_007 = "";
  text_side_007 = "left";
  photoPaths_007: Array<object> = [{
    image: "../../assets/chantiers/renovation-sous-dalle-villa-FDF/001.jpg",
    thumbImage: "../../assets/chantiers/renovation-sous-dalle-villa-FDF/001.jpg",
    alt: '',
    title: ''
  }, {
    image: "../../assets/chantiers/renovation-sous-dalle-villa-FDF/002.jpg",
    thumbImage: "../../assets/chantiers/renovation-sous-dalle-villa-FDF/002.jpg",
    alt: '',
    title: ''
  }, {
    image: ".../../assets/chantiers/renovation-sous-dalle-villa-FDF/003.jpg",
    thumbImage: "../../assets/chantiers/renovation-sous-dalle-villa-FDF/003.jpg",
    alt: '',
    title: ''
  }, {
    image: ".../../assets/chantiers/renovation-sous-dalle-villa-FDF/004.jpg",
    thumbImage: "../../assets/chantiers/renovation-sous-dalle-villa-FDF/004.jpg",
    alt: '',
    title: ''
  }, {
    image: ".../../assets/chantiers/renovation-sous-dalle-villa-FDF/005.jpg",
    thumbImage: "../../assets/chantiers/renovation-sous-dalle-villa-FDF/005.jpg",
    alt: '',
    title: ''
  }, {
    image: ".../../assets/chantiers/renovation-sous-dalle-villa-FDF/006.jpg",
    thumbImage: "../../assets/chantiers/renovation-sous-dalle-villa-FDF/006.jpg",
    alt: '',
    title: ''
  }, {
    image: ".../../assets/chantiers/renovation-sous-dalle-villa-FDF/007.jpg",
    thumbImage: "../../assets/chantiers/renovation-sous-dalle-villa-FDF/007.jpg",
    alt: '',
    title: ''
  },
  ];


  title_008 = "Réseau électrique - Redoute";
  description_008 = "Téléphone avec regard de visite";
  text_side_008 = "right";
  photoPaths_008: Array<object> = [{
    image: "../../assets/chantiers/reseau-electrique-telephone-avec-regard-de-visite-REDOUTE/001.jpg",
    thumbImage: "../../assets/chantiers/reseau-electrique-telephone-avec-regard-de-visite-REDOUTE/001.jpg",
    alt: '',
    title: ''
  }, {
    image: "../../assets/chantiers/reseau-electrique-telephone-avec-regard-de-visite-REDOUTE/002.jpg",
    thumbImage: "../../assets/chantiers/reseau-electrique-telephone-avec-regard-de-visite-REDOUTE/002.jpg",
    alt: '',
    title: ''
  }];

  constructor() { }

  ngOnInit(): void {

    this.filterSelection("all")
    // Add active class to the current button (highlight it)
    var btnContainer = document.getElementById("myBtnContainer");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });

    }
  }

  filterSelection(c) {
    console.log("filter selection : " + c)
    var x, i;
    x = document.getElementsByClassName("portfolio-item");
    console.log("filter selection x: " + x.toString())
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      console.log("x[i].className.indexOf(c) : " + x[i].className.toString())
      this.w3RemoveClass(x[i], "show");
      this.w3AddClass(x[i], "hide");
      if (x[i].className.indexOf(c) > -1) {
        this.w3RemoveClass(x[i], "hide");
        this.w3AddClass(x[i], "show");
        console.log("x[i].className.indexOf(c) : " + x[i].className.toString())
      }
    }
  }

  w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
  }

  w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

}
