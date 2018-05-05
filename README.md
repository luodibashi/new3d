# Mxx2parent

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


规则：
整个塔身共计228个编码位置，对应测点已编辑相应序号，访问时需传入该点位即可
全览图：
http://47.97.118.134/tower/#/tower/center
1、应变-温度测点
http://47.97.118.134/tower/#/tower/strain/{number}/0
参数：number-测点点位
2、风压测点
http://47.97.118.134/tower/#/tower/pressure/{number}/0
3、结构变形-GNSS测点
http://47.97.118.134/tower/#/tower/structure/{number}/0
4、气象站
http://47.97.118.134/tower/#/tower/weather/{number}/0