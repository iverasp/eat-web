import {BlogCategory} from "./blog-category";
export class BlogEntry {
    id: number;
    slug: string;
    title: string;
    summary: string;
    timeCreated: Date;
    timeEdited: Date;
    contents: string;
    category: BlogCategory;
    author: string;
}