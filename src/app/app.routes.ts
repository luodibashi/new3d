import { Routes, RouterModule } from '@angular/router'
// import { AccountRoutes } from './account/account.routes'
import { ModuleWithProviders } from "@angular/core";
// import { ExtendRoutes } from './extend/extend.routes';

const ROUTER_CONFIG: Routes = [
	{
		path: '',
		redirectTo: 'tower/center',
		pathMatch: 'full'
	},{
		path: '**',
		redirectTo: 'tower/center'
	},
	// ...AccountRoutes
]
// console.log('123',ROUTER_CONFIG);

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTER_CONFIG,{useHash: true});
