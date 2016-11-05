///<reference path="../node_modules/@types/node/index.d.ts"/>
import {Component} from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
   <h1>{{title}}</h1>
   <a routerLink="/recipes">Recipes</a>
   <router-outlet></router-outlet>
 `
})
export class AppComponent {
  title = 'Eat';
}