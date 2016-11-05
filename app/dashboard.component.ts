import {Component, OnInit} from '@angular/core';
import {Recipe} from "./recipe";
import {Router} from "@angular/router";
import {RecipeService} from "./recipe.service";

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    template: '<h3>My Dashboard</h3>'
})
export class DashboardComponent implements OnInit {
    recipes: Recipe[] = [];

    constructor(
        private router: Router,
        private recipeService: RecipeService
    ) {}

    ngOnInit(): void {
        this.recipeService.getRecipes()
            .then(recipes => this.recipes = recipes);
    }

    gotoDetail(recipe: Recipe): void {
        let link = ['/recipe', recipe.id];
        this.router.navigate(link);
    }
}