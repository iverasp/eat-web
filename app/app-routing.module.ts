import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {RecipeDetailComponent} from "./eat/recipe-detail.component";
import {RecipesComponent} from "./eat/recipes.component";
import {BlogComponent} from "./blog/blog.components";
import {BlogEntryComponent} from "./blog/blog-entry.components";
import {BlogEntryEditComponent} from "./blog/blog-entry-edit.components";
import {AboutComponent} from "./about.components";

const routes: Routes = [
    { path: '', redirectTo: '/blog', pathMatch: 'full' },
    { path: 'blog', component: BlogComponent},
    { path: 'blog/:slug', component: BlogEntryComponent },
    { path: 'blog/edit/:id', component: BlogEntryEditComponent },
    { path: 'recipe/:id', component: RecipeDetailComponent },
    { path: 'recipes', component: RecipesComponent},
    { path: 'about', component: AboutComponent}

];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}