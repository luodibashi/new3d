import { Route } from '@angular/router'

import { HomeComponent } from './home/home.component';
import { StrainComponent } from './strain/strain.component';
import { PressureComponent } from './pressure/pressure.component';
import { StructureComponent } from './structure/structure.component';
import { WeatherComponent } from './weather/weather.component';

export const HomeRoutes: Route[] = [{
	path: 'tower',
	// canActivateChild: [ MyGuard ],
	children:[
		{
			path: 'center',
			component: HomeComponent
		},
		{
			path: 'strain/:number',
			component: StrainComponent
		},
		{
			path: 'pressure/:number',
			component: PressureComponent
		},
		{
			path: 'structure/:number',
			component: StructureComponent
		},
		{
			path: 'weather/:number',
			component: WeatherComponent
		}
	]
}]
