import { provideRouter, RouterConfig }  from '@angular/router';
import {MemeBuilderComponent} from "./memebuilder/memebuilder.component";
import {ImageBuilderComponent} from "./imagebuilder/imagebuilder.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'create/:id',
    component: MemeBuilderComponent
  },
  {
    path: 'image/:id',
    component: ImageBuilderComponent
  },
];

export const appRouterProviders = [
  provideRouter(routes)
];
