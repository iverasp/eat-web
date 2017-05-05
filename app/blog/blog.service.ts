import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import "rxjs/add/operator/toPromise";
import {BlogEntry} from "./blog-entry";
import {BlogCategory} from "./blog-category";

@Injectable()
export class BlogService {

    private headers = new Headers({'Accept': 'application/x-spring-data-verbose+json'});
    private url = 'http://localhost:8080/blog/';

    constructor(private http: Http) {
    }

    getBlogEntries(category: BlogCategory): Promise<BlogEntry[]> {
        console.log(category);
        return this.http.get(this.url + (category == null ? "" : "?category=" + category.name), {headers: this.headers})
            .toPromise()
            .then(response => response.json() as BlogEntry[])
            .catch(BlogService.handleError);
    }

    getBlogEntry(slug: string): Promise<BlogEntry> {
        return this.http.get(this.url + slug, {headers: this.headers})
            .toPromise()
            .then(response => response.json() as BlogEntry)
            .catch(BlogService.handleError);
    }

    getBlogEntryById(id: number): Promise<BlogEntry> {
        return this.http.get(this.url + id, {headers: this.headers})
            .toPromise()
            .then(response => response.json() as BlogEntry)
            .catch(BlogService.handleError);
    }

    getBlogCategories(): Promise<BlogCategory[]> {
        return this.http.get(this.url + "categories", {headers: this.headers})
            .toPromise()
            .then(response => response.json() as BlogCategory[])
            .catch(BlogService.handleError);
    }

    private static handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}