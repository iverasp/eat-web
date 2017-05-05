import { Injectable } from '@angular/core';
import {Headers, Http, Response} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Recipe} from "./recipe";

@Injectable()
export class RecipeService {

    private headers = new Headers({'Accept': 'application/x-spring-data-verbose+json'});
    private recipesUrl = 'http://localhost:8080/eat/';

    constructor(private http: Http) { }

    getRecipes(): Promise<Recipe[]> {
        return this.http
            .get(this.recipesUrl, {headers: this.headers})
            .toPromise()
            .then(response => response.json() as Recipe[])
            .catch(RecipeService.handleError);
    }

    getRecipe(id: number): Promise<Recipe> {
        const url = '${this.recipesUrl}/${id}';
        return this.http.get(this.recipesUrl + id)
            .toPromise()
            .then(response => response.json() as Recipe)
            .catch(RecipeService.handleError);
    }

    createRecipe(name: string): Promise<Recipe> {
        return this.http
            .post(this.recipesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(RecipeService.handleError);
    }

    deleteRecipe(id: number): Promise<void> {
        const url = `${this.recipesUrl}${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(RecipeService.handleError);
    }

    updateRecipe(recipe: Recipe): Promise<Recipe> {
        const url = `${this.recipesUrl}${recipe.id}`;
        return this.http
            .put(url, JSON.stringify(recipe), {headers: this.headers})
            .toPromise()
            .then(() => recipe)
            .catch(RecipeService.handleError);
    }

    private static handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}



