import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {RecipeService} from './recipe.service';
import {RecipesComponent} from "./recipes.component";
import {RecipeDetailComponent} from "./recipe-detail.component";
import {DashboardComponent} from "./dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
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
