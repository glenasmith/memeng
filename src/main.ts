import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { appRouterProviders } from './app/app.routes';
import 'fabric';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  appRouterProviders
]);
