import {OnInit, Component, NgModule} from "@angular/core";
import {BlogService} from "./blog.service";
import {BlogEntry} from "./blog-entry";
import {ActivatedRoute, Params} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {ImageCropperComponent, CropperSettings, Bounds} from "ng2-img-cropper";
@Component({
    moduleId: module.id,
    selector: 'blogEntryEdit',
    templateUrl: 'blog-entry-edit.components.html',
    styleUrls: ['blog-entry-edit.components.css'],
    providers: [BlogService],
    declarations: [ImageCropperComponent]

})
@NgModule({
    imports: [BrowserModule, FormsModule]
})
export class BlogEntryEditComponent implements OnInit {
    blogEntry: BlogEntry;
    cropperSettings: CropperSettings;
    photoData: any;
    croppedWidth:number;
    croppedHeight:number;

    constructor(
        private blogService: BlogService,
        private route: ActivatedRoute
    ) {
        this.cropperSettings = new CropperSettings();
        this.cropperSettings.width = 1920;
        this.cropperSettings.height = 700;
        this.cropperSettings.minWidth = 1920;
        this.cropperSettings.minHeight = 700;
        this.cropperSettings.croppedWidth = 1920;
        this.cropperSettings.croppedHeight = 700;
        this.cropperSettings.canvasWidth = 400;
        this.cropperSettings.canvasHeight = 300;

        this.photoData = {};
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.blogService.getBlogEntry("using-a-pcm5142-dac-with-the-raspberry-pi")
                .then(blogEntry => this.blogEntry = blogEntry)
        });
    }

    saveEntry(): void {
        console.log("Saving blog entry");
        return;
        this.blogService.updateEntry(this.blogEntry)
            .then(() => this.alertSaved());
    }

    alertSaved(): void {

    }

    cropped(bounds:Bounds) {
        this.croppedHeight =bounds.bottom-bounds.top;
        this.croppedWidth = bounds.right-bounds.left;
    }

    fileChangeListener($event) {
        var image:any = new Image();
        var file:File = $event.target.files[0];
        var myReader:FileReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent:any) {
            image.src = loadEvent.target.result;
            that.cropper.setImage(image);

        };

        myReader.readAsDataURL(file);
    }
}