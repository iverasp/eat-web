import {Component, OnInit} from '@angular/core';
import {RecipeService} from "./recipe.service";
import {Recipe} from "./recipe";
import {Router} from "@angular/router";
@Component({
    moduleId: module.id,
    selector: 'my-recipes',
    templateUrl: 'recipes.components.html',
    styleUrls: ['recipes.components.css'],
    providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
    recipes: Recipe[];
    selectedRecipe: Recipe;

    constructor(
        private recipeService: RecipeService,
        private router: Router
    ) {}

    getRecipes(): void {
        this.recipeService.getRecipes()
            .then(recipes => this.recipes = recipes);
    }

    addRecipe(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.recipeService.createRecipe(name)
            .then(recipe => {
                this.recipes.push(recipe);
                this.selectedRecipe = null;
            });
    }

    onSelect(recipe: Recipe): void {
        this.selectedRecipe = recipe;
    }

    ngOnInit(): void {
        this.getRecipes();
    }

    gotoDetail(recipe: Recipe): void {
        this.router.navigate(['/recipe', recipe.id]);
    }
}