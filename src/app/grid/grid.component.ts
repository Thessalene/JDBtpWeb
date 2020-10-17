import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() workType : string;
  @Input() photoPaths: string[];
  
  constructor() { }

  ngOnInit(): void {
    console.log("Grid : " + this.workType + " " );
    console.log("GRID : " + this.photoPaths?.toString)
  }

}
