import {Component, OnInit, Input} from "@angular/core";
import {RecipeService} from "./recipe.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Recipe} from "./recipe";
@Component({
    moduleId: module.id,
    selector: 'my-recipe-detail',
    templateUrl: 'recipe-detail.component.html',
    styleUrls: ['recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;

    constructor(
        private recipeService: RecipeService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.recipeService.getRecipe(id)
                .then(recipe => this.recipe = recipe);
        });
    }

    saveRecipe(): void {
        this.recipeService.updateRecipe(this.recipe)
            .then(() => this.alertSaved());
    }

    alertSaved(): void {

    }

    goBack(): void {
        //this.location.back();
    }

}