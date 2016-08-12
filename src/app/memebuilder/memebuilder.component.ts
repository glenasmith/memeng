import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {MemeTemplateService} from "../memetemplate.service";
import {MemeTemplate} from "../meme-template";
import { Canvas, Text, Image, IImage } from "fabric";

@Component({
  moduleId: module.id,
  selector: 'app-memebuilder',
  templateUrl: 'memebuilder.component.html',
  styleUrls: ['memebuilder.component.css']
})
export class MemeBuilderComponent implements OnInit {

  memeTemplate : MemeTemplate;

  preview: boolean = false;
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
        this.bottomCaption = this.memeTemplate.defaultBottomText;

      } catch (e) {
        console.log("Error locating Meme by id " + id + "  " + e);
      }

    });
  }

  onPreview() {

    console.log("Preview firing...");
    this.preview = true;

    let context : CanvasRenderingContext2D = this.memeCanvas.nativeElement.getContext("2d");
    let image : HTMLImageElement = document.getElementById("memeEditor") as HTMLImageElement;

    var fCanvas = new Canvas('memeCanvas');

    var that = this;

    Image.fromURL(this.memeTemplate.url, function(fImage : IImage) {

      fCanvas.setWidth(fImage.getWidth());
      fCanvas.setHeight(fImage.getHeight());

      fImage.setTop(0);
      fImage.setLeft(0);
      fCanvas.add(fImage);


      var topText = new Text(that.topCaption.toUpperCase(), {
        top: fCanvas.getHeight() * 0.1,
        left: fCanvas.getWidth() * 0.05,
        fontFamily: 'Impact',
        fontSize: 60,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 2,
        textAlign: 'center'
      });
      topText.scaleX = fCanvas.getWidth() * 0.9 / topText.getWidth();
      topText.scaleY = topText.scaleX;

      fCanvas.add(topText);


      var bottomText = new fabric.Text(that.bottomCaption.toUpperCase(), {
        top: fCanvas.getHeight() * 0.75,
        left: fCanvas.getWidth() * 0.05,
        fontSize: 60,
        fontFamily: 'Impact',
        fill: 'white',
        stroke: 'black',
        strokeWidth: 2,
        textAlign: 'center'
      });
      bottomText.scaleX = fCanvas.getWidth() * 0.9 / bottomText.getWidth();
      bottomText.scaleY = bottomText.scaleX;

      fCanvas.add(bottomText);

      //fCanvas.renderAll();


    });


    console.log("Preview done");

    // context.drawImage(image, 0, 0);
    // context.font = "20px Arial";
    // context.strokeStyle = "black";
    // context.fillStyle = 'white'
    // context.lineWidth = 1;
    // context.fillText(this.topCaption.toUpperCase(), 10, 30);
    // //context.strokeText(this.topCaption.toUpperCase(), 10, 30);
    // context.fillText(this.bottomCaption.toUpperCase(), 10, 270);
    // //context.strokeText(this.bottomCaption.toUpperCase(), 10, 270);
  }

  onCancel() {
    window.history.back();
  }

}
