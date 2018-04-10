import { Route } from '@angular/router'

import { HomeComponent } from './home/home.component';

export const HomeRoutes: Route[] = [{
	path: 'my',
	// canActivateChild: [ MyGuard ],
	children:[
		{
			path: 'home',
			component: HomeComponent
		}
	]
}]
