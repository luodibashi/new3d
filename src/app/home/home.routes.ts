import { Route } from '@angular/router'

import { HomeComponent } from './home/home.component';

export const HomeRoutes: Route[] = [{
	path: 'tower',
	// canActivateChild: [ MyGuard ],
	children:[
		{
			path: 'center',
			component: HomeComponent
		}
	]
}]
