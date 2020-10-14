import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  imagePath = '../assets/logo_jdbtp_001.png';
  constructor() { }

  ngOnInit(): void {
  }

}
