import {Component, OnInit} from '@angular/core';
import {RecipeService} from "./recipe.service";
import {Recipe} from "./recipe";
import {Router} from "@angular/router";
@Component({
    moduleId: module.id,
    selector: 'my-recipes',
    template: `
    <h1>{{title}}</h1>
    <h2>My Recipes</h2>
    <ul class="recipes">
      <li *ngFor="let recipe of recipes"
        [class.selected]="recipe === selectedRecipe"
        (click)="onSelect(recipe)">
        <span class="badge">{{recipe.id}}</span> {{recipe.name}}
      </li>
    </ul>
    <my-recipe-detail [recipe]="selectedRecipe"></my-recipe-detail>
  `,
    providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
    title = 'Eat';
    recipe = 'Windstorm';
    recipes: Recipe[];
    selectedRecipe: Recipe;

    constructor(
        private recipeService: RecipeService,
        private router: Router
    ) {}

    getRecipes(): void {
        this.recipeService.getRecipes().then(recipes => this.recipes = recipes);
    }

    onSelect(recipe: Recipe): void {
        this.selectedRecipe = recipe;
    }

    ngOnInit(): void {
        this.getRecipes();
    }

    gotoDetail(): void {
    this.router.navigate(['/recipe', this.selectedRecipe.id]);
}
}