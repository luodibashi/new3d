import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
@Input() menuDate:number
  constructor(
  	private Router: Router,
  	private Route: ActivatedRoute
 	) { }

  ngOnInit() {

  }
  watch(type){
  	if(type===1){
  		this.Router.navigate(['tower/strain/0/0']);
  	} else if(type===2){
  		this.Router.navigate(['tower/pressure/0/0']);
  	} else if(type===3){
  		this.Router.navigate(['tower/structure/0/0']);
  	} else if (type ===4){
  		this.Router.navigate(['tower/weather/0/0']);
  	} else {
  		this.Router.navigate(['tower/center']);
  	}
  }
}
