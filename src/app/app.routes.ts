import { Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { HomeNineComponent } from './shop/home-9/home-nine.component';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'home/nine',
    pathMatch: 'full'
  },
  {
    path: 'nine',
    component: HomeNineComponent
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
      },
      {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
      }
    ]
  },
  {path: "", loadChildren: () => import("./pages/search/search.module").then(m => m.SearchModule)},
  {path: "", loadChildren: () => import("./shared/header/widgets/settings/setting.module").then(m => m.SettingModule)},
  {
    path: '**',
    redirectTo: 'home/nine'
  }
];

