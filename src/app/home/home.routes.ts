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
			path: 'strain/:number/:order',
			component: StrainComponent
		},
		{
			path: 'pressure/:number/:order',
			component: PressureComponent
		},
		{
			path: 'structure/:number/:order',
			component: StructureComponent
		},
		{
			path: 'weather/:number/:order',
			component: WeatherComponent
		}
	]
}]
