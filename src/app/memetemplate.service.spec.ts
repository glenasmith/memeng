/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { MemeTemplateService } from './memetemplate.service';
import {MemeTemplate} from "./meme-template";

describe('Service: MemeTemplateService', () => {
  beforeEach(() => {
    addProviders([MemeTemplateService]);
  });

  it('should return just one meme template',
    inject([MemeTemplateService],
      (service: MemeTemplateService) => {

        var templates : Array<MemeTemplate> = service.getMemeTemplates();
        expect(templates.length).toBe(2);
      }));
});
