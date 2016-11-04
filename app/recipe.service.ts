///<reference path="../node_modules/@types/core-js/index.d.ts"/>
import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Recipe} from "./recipe";

@Injectable()
export class RecipeService {

    private recipesUrl = 'http://localhost:8000/api/recipes/recipes/';

    constructor(private http: Http) { }

    getRecipes(): Promise<Recipe[]> {
        return this.http.get(this.recipesUrl)
            .toPromise()
            .then(response => response.json().data as Recipe[])
            .catch(this.handleError);
    }

    getRecipe(id: number): Promise<Recipe> {
        return this.getRecipes()
            .then(recipes => recipes.find(recipe => recipe.id === id))
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}



