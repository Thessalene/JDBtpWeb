import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  test="../../assets/slider/building-002.jpg";
  test2="../../assets/architect-bg.jpg";
  test3="../../assets/slider/construction-002.jpg";
  test4="../../assets/slider/excavation-001.jpg";

  constructor() { }

  ngOnInit(): void {
    console.log("image path 1: "+ this.test);
  }

}
