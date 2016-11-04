import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RecipeService} from './recipe.service';
import {RecipesComponent} from "./recipes.component";
import {RecipeDetailComponent} from "./recipe-detail.component";
import {DashboardComponent} from "./dashboard.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  declarations: [
      AppComponent,
      DashboardComponent,
      RecipeDetailComponent,
      RecipesComponent
  ],
  providers: [ RecipeService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

