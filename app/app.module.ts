import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.components';
import {RecipeService} from './eat/recipe.service';
import {RecipesComponent} from "./eat/recipes.component";
import {RecipeDetailComponent} from "./eat/recipe-detail.component";
import {DashboardComponent} from "./dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import {BlogComponent} from "./blog/blog.components";
import {MarkdownModule} from "angular2-markdown";
import {BlogEntryComponent} from "./blog/blog-entry.components";
import {BlogService} from "./blog/blog.service";
import {OrdinalPipe} from "./utils/OrdinalPipe";
import {BlogEntryEditComponent} from "./blog/blog-entry-edit.components";
import {AboutComponent} from "./about.components";
import {ImageCropperComponent} from "ng2-img-cropper";


@NgModule({
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpModule,
      FormsModule,
      FlexLayoutModule,
      MarkdownModule.forRoot(),
  ],
  declarations: [
      AppComponent,
      DashboardComponent,
      RecipeDetailComponent,
      RecipesComponent,
      BlogComponent,
      BlogEntryComponent,
      BlogEntryEditComponent,
      AboutComponent,
      OrdinalPipe,
      ImageCropperComponent
  ],
  providers: [ RecipeService, BlogService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
