import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router'

@Component({
  selector: 'app-pressure',
  templateUrl: './pressure.component.html',
  styleUrls: ['./pressure.component.less']
})
export class PressureComponent implements OnInit {
	base = [
		{
			"img":"./assets/image/2/1.jpg",
			"id":1
		},
		{
			"img":"./assets/image/2/2.jpg",
			"id":2
		},
		{
			"img":"./assets/image/2/3.jpg",
			"id":3
		},
		{
			"img":"./assets/image/2/4.jpg",
			"id":4
		},
		{
			"img":"./assets/image/2/5.jpg",
			"id":5
		},
		{
			"img":"./assets/image/2/6.jpg",
			"id":6
		},
		{
			"img":"./assets/image/2/7.jpg",
			"id":7
		},
		{
			"img":"./assets/image/2/8.jpg",
			"id":8
		},
		{
			"img":"./assets/image/2/9.jpg",
			"id":9
		},
		{
			"img":"./assets/image/2/10.jpg",
			"id":10
		},
		{
			"img":"./assets/image/2/11.jpg",
			"id":11
		},
		{
			"img":"./assets/image/2/12.jpg",
			"id":12
		}
	]
	targetBase: string
	targetId: number
	pointBase = []
	targetPointId:number
  constructor(
  	private Router: Router,
  	private Route: ActivatedRoute
 	) { }

  ngOnInit() {
  	this.targetPointId = +this.Route.snapshot.params['number'];
  	this.targetBase = this.base[0].img;
  	this.targetId = this.base[0]['id'];
  	// TemplateStringsArray
		let a=0;
		for(let i=0; i<133;i++){
			let pointList = {};
			a++;
			pointList['id'] = a;
			pointList['isUse'] = 1;
			pointList['pointId'] = a;
			this.pointBase[i] = pointList;
		}
  	// console.log(this.pointBase);
  }

  choosePoint(pointId,i){
  	// console.log(pointId,i);
  	// this.pointBase[i]['selected'] = 1;
  	// console.log(this.pointBase[i]);
  	this.targetPointId = pointId;
  }
  // 向左转
  turnLeft(){
  	// console.log(this.targetId+'初始');
  	if(this.targetId==1){
  		this.targetId = 12
  		this.targetBase = this.base[11].img;
			let a=209;
	  	for(let i=0;i<19; i++){
	  		a++;
				this.pointBase[i]['pointId'] = a;
	  	}
	  	let b=0;
	  	for(let i=19;i<133; i++){
	  		// a++;
	  		b++;
				this.pointBase[i]['pointId'] = b;
	  	}
  	} else {
  		this.targetId--;
  		this.targetBase = this.base[this.targetId-1].img;
  		// console.log(this.targetId); 
  		if(this.targetId==1){
				let a=0;
		  	for(let i=0;i<133; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
		  	}
  		} else if(this.targetId==2){
				let a=19;
		  	for(let i=0;i<133; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
		  	}
  		} else if(this.targetId==3){
				let a=38;
		  	for(let i=0;i<133; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
		  	}
  		} else if(this.targetId==4){
				let a=57;
		  	for(let i=0;i<133; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
		  	}
  		} else if(this.targetId==5){
				let a=76;
		  	for(let i=0;i<133; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
		  	}
  		} else if(this.targetId==6){
				let a=95;
		  	for(let i=0;i<133; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
		  	}
  		} else if(this.targetId==7){
				let a=114;
		  	for(let i=0;i<114; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
		  	}
		  	let b=0;
		  	for(let i=114;i<133; i++){
		  		// a++;
		  		b++;
					this.pointBase[i]['pointId'] = b;
		  	}
  		} else if(this.targetId==8){
				let a=133;
		  	for(let i=0;i<95; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
		  	}
		  	let b=0;
		  	for(let i=95;i<133; i++){
		  		// a++;
		  		b++;
					this.pointBase[i]['pointId'] = b;
		  	}
  		} else if(this.targetId==9){
				let a=152;
		  	for(let i=0;i<76; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
		  	}
		  	let b=0;
		  	for(let i=76;i<133; i++){
		  		// a++;
		  		b++;
					this.pointBase[i]['pointId'] = b;
		  	}
  		} else if(this.targetId==10){
				let a=171;
		  	for(let i=0;i<57; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
		  	}
		  	let b=0;
		  	for(let i=57;i<133; i++){
		  		// a++;
		  		b++;
					this.pointBase[i]['pointId'] = b;
		  	}
  		} else if(this.targetId==11){
				let a=190;
		  	for(let i=0;i<38; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
		  	}
		  	let b=0;
		  	for(let i=38;i<133; i++){
		  		// a++;
		  		b++;
					this.pointBase[i]['pointId'] = b;
		  	}
  		}
  	}
  	// console.log(this.targetId)
  }
  // 向右转
  turnRight(){
  	// console.log(this.targetId);
  	if(this.targetId==12){
  		this.targetId = 1
  		this.targetBase = this.base[0].img;
			let a=0;
	  	for(let i=0;i<this.pointBase.length; i++){
	  		a++;
				this.pointBase[i]['pointId'] = a;
	  	}
  	} else {
  		this.targetId++;
  		this.targetBase = this.base[this.targetId-1].img;
  		// console.log(this.targetId); 
  		if(this.targetId==2){
				let a=19;
		  	for(let i=0;i<133; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
		  	}
  		} else if(this.targetId==3){
				let a=38;
		  	for(let i=0;i<133; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
		  	}
  		} else if(this.targetId==4){
				let a=57;
		  	for(let i=0;i<133; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
		  	}
  		} else if(this.targetId==5){
				let a=76;
		  	for(let i=0;i<133; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
		  	}
  		} else if(this.targetId==6){
				let a=95;
		  	for(let i=0;i<133; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
		  	}
  		} else if(this.targetId==7){
				let a=114;
		  	for(let i=0;i<114; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
		  	}
		  	let b=0;
		  	for(let i=114;i<133; i++){
		  		// a++;
		  		b++;
					this.pointBase[i]['pointId'] = b;
		  	}
  		} else if(this.targetId==8){
				let a=133;
		  	for(let i=0;i<95; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
		  	}
		  	let b=0;
		  	for(let i=95;i<133; i++){
		  		// a++;
		  		b++;
					this.pointBase[i]['pointId'] = b;
		  	}
  		} else if(this.targetId==9){
				let a=152;
		  	for(let i=0;i<76; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
		  	}
		  	let b=0;
		  	for(let i=76;i<133; i++){
		  		// a++;
		  		b++;
					this.pointBase[i]['pointId'] = b;
		  	}
  		} else if(this.targetId==10){
				let a=171;
		  	for(let i=0;i<57; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
		  	}
		  	let b=0;
		  	for(let i=57;i<133; i++){
		  		// a++;
		  		b++;
					this.pointBase[i]['pointId'] = b;
		  	}
  		} else if(this.targetId==11){
				let a=190;
		  	for(let i=0;i<38; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
		  	}
		  	let b=0;
		  	for(let i=38;i<133; i++){
		  		// a++;
		  		b++;
					this.pointBase[i]['pointId'] = b;
		  	}
  		} else if(this.targetId==12){
				let a=209;
		  	for(let i=0;i<19; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
		  	}
		  	let b=0;
		  	for(let i=19;i<133; i++){
		  		// a++;
		  		b++;
					this.pointBase[i]['pointId'] = b;
		  	}
  		}
  	// console.log(this.targetId)
  	}
  }
}
