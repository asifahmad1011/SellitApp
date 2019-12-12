import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';  

import { AboutUsComponent } from './about-us/about-us.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { CollectionComponent } from './collection/collection.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaqComponent } from './faq/faq.component';
// Portfolio Page
import { GridTwoColComponent } from './portfolio/grid-two-col/grid-two-col.component';
import { GridThreeColComponent } from './portfolio/grid-three-col/grid-three-col.component';
import { GridFourColComponent } from './portfolio/grid-four-col/grid-four-col.component';
import { MasonaryTwoGridComponent } from './portfolio/masonary-two-grid/masonary-two-grid.component';
import { MasonaryThreeGridComponent } from './portfolio/masonary-three-grid/masonary-three-grid.component';
import { MasonaryFourGridComponent } from './portfolio/masonary-four-grid/masonary-four-grid.component';
import { MasonaryFullwidthComponent } from './portfolio/masonary-fullwidth/masonary-fullwidth.component';
import { SellComponent } from './sell/sell.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: '404',
        component: ErrorPageComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'sell',
        component: SellComponent
      },
      {
        path: 'collection',
        component: CollectionComponent
      },
      {
        path: 'forgetpassword',
        component: ForgetPasswordComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'faq',
        component: FaqComponent
      },
      {
        path: 'grid/two/column',
        component: GridTwoColComponent
      },
      {
        path: 'grid/three/column',
        component: GridThreeColComponent
      },
      {
        path: 'grid/four/column',
        component: GridFourColComponent
      },
      {
        path: 'grid/two/masonary',
        component: MasonaryTwoGridComponent
      },
      {
        path: 'grid/three/masonary',
        component: MasonaryThreeGridComponent
      },
      {
        path: 'grid/four/masonary',
        component: MasonaryFourGridComponent
      },
      {
        path: 'fullwidth/masonary',
        component: MasonaryFullwidthComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
