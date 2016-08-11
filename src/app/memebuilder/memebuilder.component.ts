import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {MemeTemplateService} from "../memetemplate.service";
import {MemeTemplate} from "../meme-template";

@Component({
  moduleId: module.id,
  selector: 'app-memebuilder',
  templateUrl: 'memebuilder.component.html',
  styleUrls: ['memebuilder.component.css']
})
export class MemeBuilderComponent implements OnInit {

  memeTemplate : MemeTemplate;

  topCaption: string;
  bottomCaption: string;

  @ViewChild("memeCanvas") memeCanvas : ElementRef;

  constructor(private memeTemplateService : MemeTemplateService, private router : Router,
  private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      try {
        this.memeTemplate = this.memeTemplateService.getMemeTemplateById(id);
        this.topCaption = this.memeTemplate.defaultTopText;

      } catch (e) {
        console.log("Error locating Meme by id " + id + "  " + e);
      }

    });
  }

  onPreview() {

    let context : CanvasRenderingContext2D = this.memeCanvas.nativeElement.getContext("2d");
    let image : HTMLImageElement = document.getElementById("memeEditor") as HTMLImageElement;
    context.drawImage(image, 0, 0);
    context.font = "20px Arial";
    context.strokeStyle = "black";
    context.fillStyle = 'white'
    context.lineWidth = 1;
    context.fillText(this.topCaption.toUpperCase(), 10, 30);
    //context.strokeText(this.topCaption.toUpperCase(), 10, 30);
    context.fillText(this.bottomCaption.toUpperCase(), 10, 270);
    //context.strokeText(this.bottomCaption.toUpperCase(), 10, 270);
  }

  onCancel() {
    window.history.back();
  }

}
