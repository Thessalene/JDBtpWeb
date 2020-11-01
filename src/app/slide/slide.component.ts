import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() photoPaths: Array<object>;
  @Input() text_side: string;

  classTest: string= '';


  slideIndex = 1;

  constructor() { }

  ngOnInit(): void {
    console.log("TEXT SIDE : " + this.text_side);
    this.classTest = "row_" + this.text_side;
    console.log("CLASS EST  : " + this.classTest);

  }




}
