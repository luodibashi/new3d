import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// 路由控制模块
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PressureComponent } from './pressure/pressure.component';
import { StrainComponent } from './strain/strain.component';
import { StructureComponent } from './structure/structure.component';
import { WeatherComponent } from './weather/weather.component';

import { HomeRoutes } from './home.routes';
import { MenuComponent } from './menu/menu.component';
import { DirectionComponent } from './direction/direction.component';
import { WaitComponent } from './wait/wait.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [
  	HomeComponent,
  	PressureComponent,
  	StrainComponent,
  	StructureComponent,
  	WeatherComponent,
  	MenuComponent,
  	DirectionComponent,
  	WaitComponent
  ]
})
export class HomeModule { }
