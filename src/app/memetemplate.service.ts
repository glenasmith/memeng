import { Injectable } from '@angular/core';
import {MemeTemplate} from "./meme-template";

@Injectable()
export class MemeTemplateService {

  constructor() { }

  getMemeTemplates() : Array<MemeTemplate> {

      return [
        new MemeTemplate(1, "Willy Wonka", "/templates/willy_wonka.png", "(Your Text)", "How's that working out for you?"),
        new MemeTemplate(2, "Lord of the Rings", "/templates/lord_of_the_rings.png", "One Does Not Simply", "(Your Text)")
      ]

  }

  getMemeTemplateById(id: number) : MemeTemplate {

    let templates = this.getMemeTemplates();
    for (let template of templates) {
      if (template.id === id) {
        return template;
      }
    }
    throw new Error("Could not find template id " + id);

  }

}
