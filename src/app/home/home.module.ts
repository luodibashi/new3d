import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// 路由控制模块
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { HomeRoutes } from './home.routes'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [
  	HomeComponent
  ]
})
export class HomeModule { }
