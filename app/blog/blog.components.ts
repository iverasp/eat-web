import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BlogService} from "./blog.service";
import {BlogEntry} from "./blog-entry";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {BlogCategory} from "./blog-category";
@Component({
    moduleId: module.id,
    selector: 'my-blogentries',
    templateUrl: 'blog.components.html',
    styleUrls: ['blog.components.css'],
    providers: [BlogService]
})

export class BlogComponent implements OnInit {
    blogEntries: BlogEntry[];
    blogCategories: BlogCategory[];

    constructor(
        private blogService: BlogService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    getBlogEntries(category: BlogCategory): void {
        this.blogService.getBlogEntries(category)
            .then(blogEntries => this.blogEntries = blogEntries);
    }

    getBlogCategories(): void {
        this.blogService.getBlogCategories()
            .then(blogCategories => this.blogCategories = blogCategories);
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let category = params['category'];
            console.log(params);
            this.getBlogEntries(category);
        });
        this.getBlogCategories();
    }

}