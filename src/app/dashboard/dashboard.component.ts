import { Component, OnInit } from '@angular/core';
import {MemeTemplateService} from "../memetemplate.service";
import {MemeTemplate} from "../meme-template";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  templates : Array<MemeTemplate>;

  constructor(private memeTemplateService : MemeTemplateService, private router : Router) { }

  ngOnInit() {
    this.templates = this.memeTemplateService.getMemeTemplates();
    console.log("Template size is: " + this.templates.length);
  }

  onSelect(template : MemeTemplate) {
    let link = ['/create', template.id];
    this.router.navigate(link);
  }

}
