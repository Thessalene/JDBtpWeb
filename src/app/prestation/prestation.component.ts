import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.css']
})
export class PrestationComponent implements OnInit {
  @Input() image : string;
  @Input() title : string;
  @Input() description : string;

  constructor() { }

  ngOnInit(): void {
  }

}
