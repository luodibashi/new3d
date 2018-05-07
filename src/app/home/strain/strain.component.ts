import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router'

@Component({
  selector: 'app-strain',
  templateUrl: './strain.component.html',
  styleUrls: ['./strain.component.less']
})
export class StrainComponent implements OnInit {
	base = [
		{
			"img":"./assets/image/1/1.jpg",
			"id":1
		},
		{
			"img":"./assets/image/1/2.jpg",
			"id":2
		},
		{
			"img":"./assets/image/1/3.jpg",
			"id":3
		},
		{
			"img":"./assets/image/1/4.jpg",
			"id":4
		},
		{
			"img":"./assets/image/1/5.jpg",
			"id":5
		},
		{
			"img":"./assets/image/1/6.jpg",
			"id":6
		},
		{
			"img":"./assets/image/1/7.jpg",
			"id":7
		},
		{
			"img":"./assets/image/1/8.jpg",
			"id":8
		},
		{
			"img":"./assets/image/1/9.jpg",
			"id":9
		},
		{
			"img":"./assets/image/1/10.jpg",
			"id":10
		},
		{
			"img":"./assets/image/1/11.jpg",
			"id":11
		},
		{
			"img":"./assets/image/1/12.jpg",
			"id":12
		}
	]
	targetBase: string
	targetId: number
	pointBase = []
	targetPointId:number
	order:number
  constructor(
  	private Router: Router,
  	private Route: ActivatedRoute
 	) { }

  ngOnInit() {
  	this.targetPointId = +this.Route.snapshot.params['number'];
  	this.order = +this.Route.snapshot.params['order'];
  	this.targetBase = this.base[0].img;
  	this.targetId = this.base[0]['id'];
  	// TemplateStringsArray
		let a=0;
		for(let i=0; i<133;i++){
			let pointList = {};
			a++;
			pointList['id'] = a;
			pointList['pointId'] = a;
			//42,44,46,52,54,57,99,101,109,111,114,156,158,160,166,168,171,213,215,218,223,225,228
			// if(pointList['id'])
			pointList['isUse'] = 0;
			this.pointBase[i] = pointList;
			this.getPointUsed(i,a);
			// pointList['isUse'] = 1;
		}
  	// console.log(this.pointBase);
  }

  // 配置是否启用该点
  getPointUsed(i,pointId){
  	switch (pointId){
			case 42:
				this.pointBase[i]['isUse'] = 1;
				break;
			case 44:
				this.pointBase[i]['isUse'] = 1;
				break;
			case 46:
				this.pointBase[i]['isUse'] = 1;
				break;
			case 52:
				this.pointBase[i]['isUse'] = 1;
				break;
			case 54:
				this.pointBase[i]['isUse'] = 1;
				break;
			case 57:
				this.pointBase[i]['isUse'] = 1;
				break;
			case 99:
				this.pointBase[i]['isUse'] = 1;
				break;
			case 101:
				this.pointBase[i]['isUse'] = 1;
				break;
			case 103:
				this.pointBase[i]['isUse'] = 1;
				break;
			case 109:
				this.pointBase[i]['isUse'] = 1;
				break;
			case 111:
				this.pointBase[i]['isUse'] = 1;
				break;
			case 114:
				this.pointBase[i]['isUse'] = 1;
				break;
			case 156:
				this.pointBase[i]['isUse'] = 1;
				break;
			case 158:
				this.pointBase[i]['isUse'] = 1;
				break;
			case 160:
				this.pointBase[i]['isUse'] = 1;
				break;
			case 166:
				this.pointBase[i]['isUse'] = 1;
				break;
			case 168:
				this.pointBase[i]['isUse'] = 1;
				break;
			case 171:
				this.pointBase[i]['isUse'] = 1;
				break;
			case 213:
				this.pointBase[i]['isUse'] = 1;
				break;
			case 215:
				this.pointBase[i]['isUse'] = 1;
				break;
			case 217:
				this.pointBase[i]['isUse'] = 1;
				break;
			case 223:
				this.pointBase[i]['isUse'] = 1;
				break;
			case 225:
				this.pointBase[i]['isUse'] = 1;
				break;
			case 228:
				this.pointBase[i]['isUse'] = 1;
				break;
		}
  }

  choosePoint(pointId,i){
  	// console.log(pointId,i);
  	// this.pointBase[i]['selected'] = 1;
  	// console.log(this.pointBase[i]);
  	this.targetPointId = pointId;
		this.Router.navigate(['tower/strain/'+this.targetPointId+'/'+this.order]);
  }

  // 向左转
  turnLeft(){
  	// 重置isUse参数
  	for(let i=0; i<133;i++){
			this.pointBase[i]['isUse'] = 0;
		}
  	// console.log(this.targetId+'初始');
  	if(this.targetId==1){
  		this.targetId = 12
  		this.targetBase = this.base[11].img;
			let a=209;
	  	for(let i=0;i<19; i++){
	  		a++;
				this.pointBase[i]['pointId'] = a;
				this.getPointUsed(i,a);
	  	}
	  	let b=0;
	  	for(let i=19;i<133; i++){
	  		// a++;
	  		b++;
				this.pointBase[i]['pointId'] = b;
				this.getPointUsed(i,b);
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
					this.getPointUsed(i,a);
		  	}
  		} else if(this.targetId==2){
				let a=19;
		  	for(let i=0;i<133; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
					this.getPointUsed(i,a);
		  	}
  		} else if(this.targetId==3){
				let a=38;
		  	for(let i=0;i<133; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
					this.getPointUsed(i,a);
		  	}
  		} else if(this.targetId==4){
				let a=57;
		  	for(let i=0;i<133; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
					this.getPointUsed(i,a);
		  	}
  		} else if(this.targetId==5){
				let a=76;
		  	for(let i=0;i<133; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
					this.getPointUsed(i,a);
		  	}
  		} else if(this.targetId==6){
				let a=95;
		  	for(let i=0;i<133; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
					this.getPointUsed(i,a);
		  	}
  		} else if(this.targetId==7){
				let a=114;
		  	for(let i=0;i<114; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
					this.getPointUsed(i,a);
		  	}
		  	let b=0;
		  	for(let i=114;i<133; i++){
		  		// a++;
		  		b++;
					this.pointBase[i]['pointId'] = b;
					this.getPointUsed(i,b);
		  	}
  		} else if(this.targetId==8){
				let a=133;
		  	for(let i=0;i<95; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
					this.getPointUsed(i,a);
		  	}
		  	let b=0;
		  	for(let i=95;i<133; i++){
		  		// a++;
		  		b++;
					this.pointBase[i]['pointId'] = b;
					this.getPointUsed(i,b);
		  	}
  		} else if(this.targetId==9){
				let a=152;
		  	for(let i=0;i<76; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
					this.getPointUsed(i,a);
		  	}
		  	let b=0;
		  	for(let i=76;i<133; i++){
		  		// a++;
		  		b++;
					this.pointBase[i]['pointId'] = b;
					this.getPointUsed(i,b);
		  	}
  		} else if(this.targetId==10){
				let a=171;
		  	for(let i=0;i<57; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
					this.getPointUsed(i,a);
		  	}
		  	let b=0;
		  	for(let i=57;i<133; i++){
		  		// a++;
		  		b++;
					this.pointBase[i]['pointId'] = b;
					this.getPointUsed(i,b);
		  	}
  		} else if(this.targetId==11){
				let a=190;
		  	for(let i=0;i<38; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
					this.getPointUsed(i,a);
		  	}
		  	let b=0;
		  	for(let i=38;i<133; i++){
		  		// a++;
		  		b++;
					this.pointBase[i]['pointId'] = b;
					this.getPointUsed(i,b);
		  	}
  		}
  	}
  	// console.log(this.targetId)
  }
  // 向右转
  turnRight(){
  	// 重置isUse参数
  	for(let i=0; i<133;i++){
			this.pointBase[i]['isUse'] = 0;
		}
  	// console.log(this.targetId);
  	if(this.targetId==12){
  		this.targetId = 1
  		this.targetBase = this.base[0].img;
			let a=0;
	  	for(let i=0;i<this.pointBase.length; i++){
	  		a++;
				this.pointBase[i]['pointId'] = a;
				this.getPointUsed(i,a);
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
					this.getPointUsed(i,a);
		  	}
  		} else if(this.targetId==3){
				let a=38;
		  	for(let i=0;i<133; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
					this.getPointUsed(i,a);
		  	}
  		} else if(this.targetId==4){
				let a=57;
		  	for(let i=0;i<133; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
					this.getPointUsed(i,a);
		  	}
  		} else if(this.targetId==5){
				let a=76;
		  	for(let i=0;i<133; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
					this.getPointUsed(i,a);
		  	}
  		} else if(this.targetId==6){
				let a=95;
		  	for(let i=0;i<133; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
					this.getPointUsed(i,a);
		  	}
  		} else if(this.targetId==7){
				let a=114;
		  	for(let i=0;i<114; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
					this.getPointUsed(i,a);
		  	}
		  	let b=0;
		  	for(let i=114;i<133; i++){
		  		// a++;
		  		b++;
					this.pointBase[i]['pointId'] = b;
					this.getPointUsed(i,b);
		  	}
  		} else if(this.targetId==8){
				let a=133;
		  	for(let i=0;i<95; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
					this.getPointUsed(i,a);
		  	}
		  	let b=0;
		  	for(let i=95;i<133; i++){
		  		// a++;
		  		b++;
					this.pointBase[i]['pointId'] = b;
					this.getPointUsed(i,b);
		  	}
  		} else if(this.targetId==9){
				let a=152;
		  	for(let i=0;i<76; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
					this.getPointUsed(i,a);
		  	}
		  	let b=0;
		  	for(let i=76;i<133; i++){
		  		// a++;
		  		b++;
					this.pointBase[i]['pointId'] = b;
					this.getPointUsed(i,b);
		  	}
  		} else if(this.targetId==10){
				let a=171;
		  	for(let i=0;i<57; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
					this.getPointUsed(i,a);
		  	}
		  	let b=0;
		  	for(let i=57;i<133; i++){
		  		// a++;
		  		b++;
					this.pointBase[i]['pointId'] = b;
					this.getPointUsed(i,b);
		  	}
  		} else if(this.targetId==11){
				let a=190;
		  	for(let i=0;i<38; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
					this.getPointUsed(i,a);
		  	}
		  	let b=0;
		  	for(let i=38;i<133; i++){
		  		// a++;
		  		b++;
					this.pointBase[i]['pointId'] = b;
					this.getPointUsed(i,b);
		  	}
  		} else if(this.targetId==12){
				let a=209;
		  	for(let i=0;i<19; i++){
		  		a++;
					this.pointBase[i]['pointId'] = a;
					this.getPointUsed(i,a);
		  	}
		  	let b=0;
		  	for(let i=19;i<133; i++){
		  		// a++;
		  		b++;
					this.pointBase[i]['pointId'] = b;
					this.getPointUsed(i,b);
		  	}
  		}
  	// console.log(this.targetId)
  }
	}
}
