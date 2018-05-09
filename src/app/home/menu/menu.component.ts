import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
@Input() watchType:number
  constructor(
  	private Router: Router,
  	private Route: ActivatedRoute
 	) { }

  ngOnInit() {
    // this.watchType = 0;
    // console.log(this.watchType);
  }
  watch(type){
  	if(type===1){
  		this.Router.navigate(['tower/strain/0/0']);
      this.watchType = 1;
  	} else if(type===2){
  		this.Router.navigate(['tower/pressure/0/0']);
      this.watchType = 2;
  	} else if(type===3){
  		this.Router.navigate(['tower/structure/0/0']);
      this.watchType = 3;
  	} else if (type ===4){
  		this.Router.navigate(['tower/weather/0/0']);
      this.watchType = 4;
  	} else {
  		this.Router.navigate(['tower/center']);
      this.watchType = 0;
  	}
    // console.log(this.watchType);
  }
}
