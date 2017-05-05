import {OnInit, Component} from "@angular/core";
import {BlogService} from "./blog.service";
import {BlogEntry} from "./blog-entry";
import {ActivatedRoute, Params} from "@angular/router";
@Component({
    moduleId: module.id,
    selector: 'blogEntry',
    templateUrl: 'blog-entry.components.html',
    styleUrls: ['blog-entry.components.css'],
    providers: [BlogService]
})
export class BlogEntryComponent implements OnInit {
    blogEntry: BlogEntry;

    constructor(
        private blogService: BlogService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let slug = params['slug'];
            this.blogService.getBlogEntry(slug)
                .then(blogEntry => this.blogEntry = blogEntry);
        });
    }

}