import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {MemeTemplateService} from "./memetemplate.service";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    MemeTemplateService
  ]
})
export class AppComponent {
  title = 'Angular 2 Memes';
}
