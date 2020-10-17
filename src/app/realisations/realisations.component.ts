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

  photoPaths_001 : string[] = [
    "../../assets//chantiers/robert/F5_Robert_001-001.jpg",
    "../../assets//chantiers/robert/F5_Robert_001-002.jpg",

  ];

  photoPaths_002 : string[] = [
    "../../assets/chantiers/fond-de-forme-dalle-avec-mise-en-place-film-anti-thermite_SCHOELCHER/001.jpg",
    "../../assets/chantiers/fond-de-forme-dalle-avec-mise-en-place-film-anti-thermite_SCHOELCHER/002.jpg",
    "../../assets/chantiers/fond-de-forme-dalle-avec-mise-en-place-film-anti-thermite_SCHOELCHER/003.jpg",
    "../../assets/chantiers/fond-de-forme-dalle-avec-mise-en-place-film-anti-thermite_SCHOELCHER/004.jpg",
  ];

  photoPaths_003 : string[] = [
    "../../assets/chantiers/pose-fosse-septique_Robert/001.jpg",
    "../../assets/chantiers/pose-fosse-septique_Robert/002.jpg",
    "../../assets/chantiers/pose-fosse-septique_Robert/003.jpg",
    "../../assets/chantiers/pose-fosse-septique_Robert/005.jpg",
    "../../assets/chantiers/pose-fosse-septique_Robert/006.jpg",

  ];

  photoPaths_004 : string[] = [
    "../../assets/chantiers/preparation-coffrage-long-grine-FDF/001.jpg",
    "../../assets/chantiers/preparation-coffrage-long-grine-FDF/002.jpg",
    "../../assets/chantiers/preparation-coffrage-long-grine-FDF/003.jpg",
  ];


  photoPaths_005 : string[] = [
    "../../assets/chantiers/preparation-fond-de-forme-route-Fdf/001.jpg",
    "../../assets/chantiers/preparation-fond-de-forme-route-Fdf/002.jpg",
    "../../assets/chantiers/preparation-fond-de-forme-route-Fdf/003.jpg",
    "../../assets/chantiers/preparation-fond-de-forme-route-Fdf/004.jpg",
    "../../assets/chantiers/preparation-fond-de-forme-route-Fdf/005.jpg",
    "../../assets/chantiers/preparation-fond-de-forme-route-Fdf/006.jpg",
  ];

  photoPaths_006 : string[] = [
    "../../assets/chantiers/Raccordement-fosse-septique-Robert/003.jpg",
    "../../assets/chantiers/Raccordement-fosse-septique-Robert/004.jpg",
    "../../assets/chantiers/Raccordement-fosse-septique-Robert/005.jpg",
    "../../assets/chantiers/Raccordement-fosse-septique-Robert/006.jpg",
    "../../assets/chantiers/Raccordement-fosse-septique-Robert/007.jpg",
  ];

  photoPaths_007 : string[] = [
    "../../assets/chantiers/renovation-sous-dalle-villa-FDF/001.jpg",
    "../../assets/chantiers/renovation-sous-dalle-villa-FDF/002.jpg",
    "../../assets/chantiers/renovation-sous-dalle-villa-FDF/003.jpg",
    "../../assets/chantiers/renovation-sous-dalle-villa-FDF/004.jpg",
    "../../assets/chantiers/renovation-sous-dalle-villa-FDF/005.jpg",
    "../../assets/chantiers/renovation-sous-dalle-villa-FDF/006.jpg",
    "../../assets/chantiers/renovation-sous-dalle-villa-FDF/007.jpg",
  ];


  photoPaths_008 : string[] = [
    "../../assets/chantiers/reseau-electrique-telephone-avec-regard-de-visite-REDOUTE/001.jpg",
    "../../assets/chantiers/reseau-electrique-telephone-avec-regard-de-visite-REDOUTE/002.jpg",
  ];

  constructor() { }

  ngOnInit(): void {
    this.filterSelection("all") // Execute the function and show all columns;
    // Add active class to the current button (highlight it)
    var btnContainer = document.getElementById("myBtnContainer");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
}
  }

  filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
      this.w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) this.w3AddClass(x[i], "show");
    }
  }

  w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
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
