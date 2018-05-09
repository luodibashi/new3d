import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.less']
})
export class DirectionComponent implements OnInit {
@Input() angle:number
  constructor() { }

  ngOnInit() {
  	// console.log(this.angle);
  }

}
