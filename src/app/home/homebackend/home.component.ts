import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
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
	pointBase = [
		{
			"line":1,
			"isUse":1,
			"pointList":[
				{
					"id":1,
					"isUse":1
				},
				{
					"id":2,
					"isUse":1
				},
				{
					"id":3,
					"isUse":1
				},
				{
					"id":4,
					"isUse":1
				},
				{
					"id":5,
					"isUse":1
				},
				{
					"id":6,
					"isUse":1
				},
				{
					"id":7,
					"isUse":1
				},
				{
					"id":8,
					"isUse":1
				},
				{
					"id":9,
					"isUse":1
				},
				{
					"id":10,
					"isUse":1
				},
				{
					"id":11,
					"isUse":1
				},
				{
					"id":12,
					"isUse":1
				},
				{
					"id":13,
					"isUse":1
				},
				{
					"id":14,
					"isUse":1
				},
				{
					"id":15,
					"isUse":1
				},
				{
					"id":16,
					"isUse":1
				},
				{
					"id":17,
					"isUse":1
				},
				{
					"id":18,
					"isUse":1
				},
				{
					"id":19,
					"isUse":1
				}
			]
		},
		{
			"line":2,
			"isUse":1,
			"pointList":[
				{
					"id":20,
					"isUse":1
				},
				{
					"id":21,
					"isUse":1
				},
				{
					"id":22,
					"isUse":1
				},
				{
					"id":23,
					"isUse":1
				},
				{
					"id":24,
					"isUse":1
				},
				{
					"id":25,
					"isUse":1
				},
				{
					"id":26,
					"isUse":1
				},
				{
					"id":27,
					"isUse":1
				},
				{
					"id":28,
					"isUse":1
				},
				{
					"id":29,
					"isUse":1
				},
				{
					"id":30,
					"isUse":1
				},
				{
					"id":31,
					"isUse":1
				},
				{
					"id":32,
					"isUse":1
				},
				{
					"id":33,
					"isUse":1
				},
				{
					"id":34,
					"isUse":1
				},
				{
					"id":35,
					"isUse":1
				},
				{
					"id":36,
					"isUse":1
				},
				{
					"id":37,
					"isUse":1
				},
				{
					"id":38,
					"isUse":1
				}
			]
		},
		{
			"line":3,
			"isUse":1,
			"pointList":[
				{
					"id":39,
					"isUse":1
				},
				{
					"id":40,
					"isUse":1
				},
				{
					"id":41,
					"isUse":1
				},
				{
					"id":42,
					"isUse":1
				},
				{
					"id":43,
					"isUse":1
				},
				{
					"id":44,
					"isUse":1
				},
				{
					"id":45,
					"isUse":1
				},
				{
					"id":46,
					"isUse":1
				},
				{
					"id":47,
					"isUse":1
				},
				{
					"id":48,
					"isUse":1
				},
				{
					"id":49,
					"isUse":1
				},
				{
					"id":50,
					"isUse":1
				},
				{
					"id":51,
					"isUse":1
				},
				{
					"id":52,
					"isUse":1
				},
				{
					"id":53,
					"isUse":1
				},
				{
					"id":54,
					"isUse":1
				},
				{
					"id":55,
					"isUse":1
				},
				{
					"id":56,
					"isUse":1
				},
				{
					"id":57,
					"isUse":1
				}
			]
		},
		{
			"line":4,
			"isUse":1,
			"pointList":[
				{
					"id":58,
					"isUse":1
				},
				{
					"id":59,
					"isUse":1
				},
				{
					"id":60,
					"isUse":1
				},
				{
					"id":61,
					"isUse":1
				},
				{
					"id":62,
					"isUse":1
				},
				{
					"id":63,
					"isUse":1
				},
				{
					"id":64,
					"isUse":1
				},
				{
					"id":65,
					"isUse":1
				},
				{
					"id":66,
					"isUse":1
				},
				{
					"id":67,
					"isUse":1
				},
				{
					"id":68,
					"isUse":1
				},
				{
					"id":69,
					"isUse":1
				},
				{
					"id":70,
					"isUse":1
				},
				{
					"id":71,
					"isUse":1
				},
				{
					"id":72,
					"isUse":1
				},
				{
					"id":73,
					"isUse":1
				},
				{
					"id":74,
					"isUse":1
				},
				{
					"id":75,
					"isUse":1
				},
				{
					"id":76,
					"isUse":1
				}
			]
		},
		{
			"line":5,
			"isUse":1,
			"pointList":[
				{
					"id":77,
					"isUse":1
				},
				{
					"id":78,
					"isUse":1
				},
				{
					"id":79,
					"isUse":1
				},
				{
					"id":80,
					"isUse":1
				},
				{
					"id":81,
					"isUse":1
				},
				{
					"id":82,
					"isUse":1
				},
				{
					"id":83,
					"isUse":1
				},
				{
					"id":84,
					"isUse":1
				},
				{
					"id":85,
					"isUse":1
				},
				{
					"id":86,
					"isUse":1
				},
				{
					"id":87,
					"isUse":1
				},
				{
					"id":88,
					"isUse":1
				},
				{
					"id":89,
					"isUse":1
				},
				{
					"id":90,
					"isUse":1
				},
				{
					"id":91,
					"isUse":1
				},
				{
					"id":92,
					"isUse":1
				},
				{
					"id":93,
					"isUse":1
				},
				{
					"id":94,
					"isUse":1
				},
				{
					"id":95,
					"isUse":1
				}
			]
		},
		{
			"line":6,
			"isUse":1,
			"pointList":[
				{
					"id":96,
					"isUse":1
				},
				{
					"id":97,
					"isUse":1
				},
				{
					"id":98,
					"isUse":1
				},
				{
					"id":99,
					"isUse":1
				},
				{
					"id":100,
					"isUse":1
				},
				{
					"id":101,
					"isUse":1
				},
				{
					"id":102,
					"isUse":1
				},
				{
					"id":103,
					"isUse":1
				},
				{
					"id":104,
					"isUse":1
				},
				{
					"id":105,
					"isUse":1
				},
				{
					"id":106,
					"isUse":1
				},
				{
					"id":107,
					"isUse":1
				},
				{
					"id":108,
					"isUse":1
				},
				{
					"id":109,
					"isUse":1
				},
				{
					"id":110,
					"isUse":1
				},
				{
					"id":111,
					"isUse":1
				},
				{
					"id":112,
					"isUse":1
				},
				{
					"id":113,
					"isUse":1
				},
				{
					"id":114,
					"isUse":1
				}
			]
		},
		{
			"line":7,
			"isUse":1,
			"pointList":[
				{
					"id":115,
					"isUse":1
				},
				{
					"id":116,
					"isUse":1
				},
				{
					"id":117,
					"isUse":1
				},
				{
					"id":118,
					"isUse":1
				},
				{
					"id":119,
					"isUse":1
				},
				{
					"id":120,
					"isUse":1
				},
				{
					"id":121,
					"isUse":1
				},
				{
					"id":122,
					"isUse":1
				},
				{
					"id":123,
					"isUse":1
				},
				{
					"id":124,
					"isUse":1
				},
				{
					"id":125,
					"isUse":1
				},
				{
					"id":126,
					"isUse":1
				},
				{
					"id":127,
					"isUse":1
				},
				{
					"id":128,
					"isUse":1
				},
				{
					"id":129,
					"isUse":1
				},
				{
					"id":130,
					"isUse":1
				},
				{
					"id":131,
					"isUse":1
				},
				{
					"id":132,
					"isUse":1
				},
				{
					"id":133,
					"isUse":1
				}
			]
		}
	]
  constructor(
  	private Router: Router,
  	private Route: ActivatedRoute
 	) { }

  ngOnInit() {
  	this.targetBase = this.base[0].img;
  	this.targetId = this.base[0]['id'];
  	// TemplateStringsArray
		let a=0;
  	for(let i=0;i<this.pointBase.length; i++){
  		// a++;
  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
  			a++;
  			this.pointBase[i]['pointList'][m]['pointId'] = a;
  		}
  	}
  	// console.log(this.pointBase);
  }

  // 向左转
  turnLeft(){
  	// console.log(this.targetId+'初始');
  	if(this.targetId==1){
  		this.targetId = 12
  		this.targetBase = this.base[11].img;
			let a=19;
	  	for(let i=0;i<this.pointBase.length; i++){
	  		// a++;
	  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
	  			a++;
	  			this.pointBase[i]['pointList'][m]['pointId'] = a;
	  		}
	  	}
  	} else {
  		this.targetId--;
  		this.targetBase = this.base[this.targetId-1].img;
  		// console.log(this.targetId); 
  		if(this.targetId==1){
				let a=0;
		  	for(let i=0;i<this.pointBase.length; i++){
		  		// a++;
		  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
		  			a++;
		  			this.pointBase[i]['pointList'][m]['pointId'] = a;
		  		}
		  	}
  		} else if(this.targetId==2){
				let a=209;
		  	for(let i=0;i<this.pointBase.length; i++){
		  		// a++;
		  		if(i<2){
			  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
			  			a++;
			  			this.pointBase[i]['pointList'][m]['pointId'] = a;
			  		}
			  	}
		  	}
		  	let b=0;
		  	for(let i=1;i<this.pointBase.length; i++){
		  		// a++;
		  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
		  			b++;
		  			this.pointBase[i]['pointList'][m]['pointId'] = b;
		  		}
		  	}
  		} else if(this.targetId==3){
				let a=190;
		  	for(let i=0;i<this.pointBase.length; i++){
		  		// a++;
		  		if(i<3){
			  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
			  			a++;
			  			this.pointBase[i]['pointList'][m]['pointId'] = a;
			  		}
			  	}
		  	}
		  	let b=0;
		  	for(let i=2;i<this.pointBase.length; i++){
		  		// a++;
		  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
		  			b++;
		  			this.pointBase[i]['pointList'][m]['pointId'] = b;
		  		}
		  	}
  		} else if(this.targetId==4){
				let a=171;
		  	for(let i=0;i<this.pointBase.length; i++){
		  		// a++;
		  		if(i<4){
			  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
			  			a++;
			  			this.pointBase[i]['pointList'][m]['pointId'] = a;
			  		}
			  	}
		  	}
		  	let b=0;
		  	for(let i=3;i<this.pointBase.length; i++){
		  		// a++;
		  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
		  			b++;
		  			this.pointBase[i]['pointList'][m]['pointId'] = b;
		  		}
		  	}
  		} else if(this.targetId==5){
				let a=152;
		  	for(let i=0;i<this.pointBase.length; i++){
		  		// a++;
		  		if(i<5){
			  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
			  			a++;
			  			this.pointBase[i]['pointList'][m]['pointId'] = a;
			  		}
			  	}
		  	}
		  	let b=0;
		  	for(let i=4;i<this.pointBase.length; i++){
		  		// a++;
		  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
		  			b++;
		  			this.pointBase[i]['pointList'][m]['pointId'] = b;
		  		}
		  	}
  		} else if(this.targetId==6){
				let a=133;
		  	for(let i=0;i<this.pointBase.length; i++){
		  		// a++;
		  		if(i<6){
			  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
			  			a++;
			  			this.pointBase[i]['pointList'][m]['pointId'] = a;
			  		}
		  		}
		  	}
		  	let b=0;
		  	for(let i=5;i<this.pointBase.length; i++){
		  		// a++;
		  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
		  			b++;
		  			this.pointBase[i]['pointList'][m]['pointId'] = b;
		  		}
		  	}
  		} else if(this.targetId==7){
				let a=114;
		  	for(let i=0;i<this.pointBase.length; i++){
		  		// a++;
		  		if(i<7){
			  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
			  			a++;
			  			this.pointBase[i]['pointList'][m]['pointId'] = a;
			  		}
		  		}
		  	}
		  	let b=0;
		  	for(let i=6;i<this.pointBase.length; i++){
		  		// a++;
		  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
		  			b++;
		  			this.pointBase[i]['pointList'][m]['pointId'] = b;
		  		}
		  	}
  		} else if(this.targetId==8){
				let a=95;
		  	for(let i=0;i<this.pointBase.length; i++){
		  		// a++;
		  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
		  			a++;
	  				this.pointBase[i]['pointList'][m]['pointId'] = a;
		  		}
		  	}
  		} else if(this.targetId==9){
				let a=76;
		  	for(let i=0;i<this.pointBase.length; i++){
		  		// a++;
		  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
		  			a++;
		  			this.pointBase[i]['pointList'][m]['pointId'] = a;
		  		}
		  	}
  		} else if(this.targetId==10){
				let a=57;
		  	for(let i=0;i<this.pointBase.length; i++){
		  		// a++;
		  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
		  			a++;
		  			this.pointBase[i]['pointList'][m]['pointId'] = a;
		  		}
		  	}
  		} else if(this.targetId==11){
				let a=38;
		  	for(let i=0;i<this.pointBase.length; i++){
		  		// a++;
		  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
		  			a++;
		  			this.pointBase[i]['pointList'][m]['pointId'] = a;
		  		}
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
	  		// a++;
	  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
	  			a++;
	  			this.pointBase[i]['pointList'][m]['pointId'] = a;
	  		}
	  	}
  	} else {
  		this.targetId++;
  		this.targetBase = this.base[this.targetId-1].img;
  		// console.log(this.targetId); 
  		if(this.targetId==2){
				let a=209;
		  	for(let i=0;i<this.pointBase.length; i++){
		  		// a++;
		  		if(i<2){
			  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
			  			a++;
			  			this.pointBase[i]['pointList'][m]['pointId'] = a;
			  		}
			  	}
		  	}
		  	let b=0;
		  	for(let i=1;i<this.pointBase.length; i++){
		  		// a++;
		  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
		  			b++;
		  			this.pointBase[i]['pointList'][m]['pointId'] = b;
		  		}
		  	}
  		} else if(this.targetId==3){
				let a=190;
		  	for(let i=0;i<this.pointBase.length; i++){
		  		// a++;
		  		if(i<3){
			  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
			  			a++;
			  			this.pointBase[i]['pointList'][m]['pointId'] = a;
			  		}
			  	}
		  	}
		  	let b=0;
		  	for(let i=2;i<this.pointBase.length; i++){
		  		// a++;
		  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
		  			b++;
		  			this.pointBase[i]['pointList'][m]['pointId'] = b;
		  		}
		  	}
  		} else if(this.targetId==4){
				let a=171;
		  	for(let i=0;i<this.pointBase.length; i++){
		  		// a++;
		  		if(i<4){
			  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
			  			a++;
			  			this.pointBase[i]['pointList'][m]['pointId'] = a;
			  		}
			  	}
		  	}
		  	let b=0;
		  	for(let i=3;i<this.pointBase.length; i++){
		  		// a++;
		  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
		  			b++;
		  			this.pointBase[i]['pointList'][m]['pointId'] = b;
		  		}
		  	}
  		} else if(this.targetId==5){
				let a=152;
		  	for(let i=0;i<this.pointBase.length; i++){
		  		// a++;
		  		if(i<5){
			  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
			  			a++;
			  			this.pointBase[i]['pointList'][m]['pointId'] = a;
			  		}
			  	}
		  	}
		  	let b=0;
		  	for(let i=4;i<this.pointBase.length; i++){
		  		// a++;
		  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
		  			b++;
		  			this.pointBase[i]['pointList'][m]['pointId'] = b;
		  		}
		  	}
  		} else if(this.targetId==6){
				let a=133;
		  	for(let i=0;i<this.pointBase.length; i++){
		  		// a++;
		  		if(i<6){
			  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
			  			a++;
			  			this.pointBase[i]['pointList'][m]['pointId'] = a;
			  		}
		  		}
		  	}
		  	let b=0;
		  	for(let i=5;i<this.pointBase.length; i++){
		  		// a++;
		  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
		  			b++;
		  			this.pointBase[i]['pointList'][m]['pointId'] = b;
		  		}
		  	}
  		} else if(this.targetId==7){
				let a=114;
		  	for(let i=0;i<this.pointBase.length; i++){
		  		// a++;
		  		if(i<7){
			  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
			  			a++;
			  			this.pointBase[i]['pointList'][m]['pointId'] = a;
			  		}
		  		}
		  	}
		  	let b=0;
		  	for(let i=6;i<this.pointBase.length; i++){
		  		// a++;
		  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
		  			b++;
		  			this.pointBase[i]['pointList'][m]['pointId'] = b;
		  		}
		  	}
  		} else if(this.targetId==8){
				let a=95;
		  	for(let i=0;i<this.pointBase.length; i++){
		  		// a++;
		  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
		  			a++;
	  				this.pointBase[i]['pointList'][m]['pointId'] = a;
		  		}
		  	}
  		} else if(this.targetId==9){
				let a=76;
		  	for(let i=0;i<this.pointBase.length; i++){
		  		// a++;
		  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
		  			a++;
		  			this.pointBase[i]['pointList'][m]['pointId'] = a;
		  		}
		  	}
  		} else if(this.targetId==10){
				let a=57;
		  	for(let i=0;i<this.pointBase.length; i++){
		  		// a++;
		  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
		  			a++;
		  			this.pointBase[i]['pointList'][m]['pointId'] = a;
		  		}
		  	}
  		} else if(this.targetId==11){
				let a=38;
		  	for(let i=0;i<this.pointBase.length; i++){
		  		// a++;
		  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
		  			a++;
		  			this.pointBase[i]['pointList'][m]['pointId'] = a;
		  		}
		  	}
  		} else if(this.targetId==12){
				let a=19;
		  	for(let i=0;i<this.pointBase.length; i++){
		  		// a++;
		  		for(let m=0; m<this.pointBase[i]['pointList'].length; m++){
		  			a++;
		  			this.pointBase[i]['pointList'][m]['pointId'] = a;
		  		}
		  	}
  		}
  	// console.log(this.targetId)
  }
	}
}
