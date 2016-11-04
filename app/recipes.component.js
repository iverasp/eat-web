"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var recipe_service_1 = require("./recipe.service");
var router_1 = require("@angular/router");
var RecipesComponent = (function () {
    function RecipesComponent(recipeService, router) {
        this.recipeService = recipeService;
        this.router = router;
        this.title = 'Eat';
        this.recipe = 'Windstorm';
    }
    RecipesComponent.prototype.getRecipes = function () {
        var _this = this;
        this.recipeService.getRecipes().then(function (recipes) { return _this.recipes = recipes; });
    };
    RecipesComponent.prototype.onSelect = function (recipe) {
        this.selectedRecipe = recipe;
    };
    RecipesComponent.prototype.ngOnInit = function () {
        this.getRecipes();
    };
    RecipesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/recipe', this.selectedRecipe.id]);
    };
    RecipesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-recipes',
            template: "\n    <h1>{{title}}</h1>\n    <h2>My Recipes</h2>\n    <ul class=\"recipes\">\n      <li *ngFor=\"let recipe of recipes\"\n        [class.selected]=\"recipe === selectedRecipe\"\n        (click)=\"onSelect(recipe)\">\n        <span class=\"badge\">{{recipe.id}}</span> {{recipe.name}}\n      </li>\n    </ul>\n    <my-recipe-detail [recipe]=\"selectedRecipe\"></my-recipe-detail>\n  ",
            providers: [recipe_service_1.RecipeService]
        }), 
        __metadata('design:paramtypes', [recipe_service_1.RecipeService, router_1.Router])
    ], RecipesComponent);
    return RecipesComponent;
}());
exports.RecipesComponent = RecipesComponent;
//# sourceMappingURL=recipes.component.js.map