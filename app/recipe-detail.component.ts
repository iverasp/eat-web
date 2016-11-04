import {Component, OnInit, Input} from "@angular/core";
import {RecipeService} from "./recipe.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Recipe} from "./recipe";
@Component({
    moduleId: module.id,
    selector: 'my-recipe-detail',
    template: '<h3>My detail</h3>'
})
export class RecipeDetailComponent implements OnInit {

    @Input() recipe: Recipe;

    constructor(
        private recipeService: RecipeService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.recipeService.getRecipe(id)
                .then(hero => this.recipe = hero);
        });
    }

    goBack(): void {
        //this.location.back();
    }

}