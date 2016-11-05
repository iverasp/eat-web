///<reference path="../node_modules/@types/core-js/index.d.ts"/>
import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Recipe} from "./recipe";

@Injectable()
export class RecipeService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private recipesUrl = 'http://localhost:8000/api/recipes/recipes/';

    constructor(private http: Http) { }

    getRecipes(): Promise<Recipe[]> {
        return this.http.get(this.recipesUrl + "?format=json")
            .toPromise()
            .then(response => response.json() as Recipe[])
            .catch(this.handleError);
    }

    getRecipe(id: number): Promise<Recipe> {
        const url = '${this.recipesUrl}/${id}';
        return this.http.get(this.recipesUrl + id + "?format=json")
            .toPromise()
            .then(response => response.json() as Recipe)
            .catch(this.handleError);
    }

    createRecipe(name: string): Promise<Recipe> {
        return this.http
            .post(this.recipesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    deleteRecipe(id: number): Promise<void> {
        const url = `${this.recipesUrl}${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    updateRecipe(recipe: Recipe): Promise<Recipe> {
        const url = `${this.recipesUrl}${recipe.id}`;
        return this.http
            .put(url, JSON.stringify(recipe), {headers: this.headers})
            .toPromise()
            .then(() => recipe)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}



