import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wait',
  templateUrl: './wait.component.html',
  styleUrls: ['./wait.component.less']
})
export class WaitComponent implements OnInit {
	private timer :any
	showLoad: boolean = true
	timeLast: number
  constructor() { }

  ngOnInit() {
  	this.timeLast = 3;
  	this.timer = setInterval(()=>{
  		this.timeLast --;
  		if(this.timeLast<1){
  			this.showLoad = false;
  		}
  	},1000)
  }

}
