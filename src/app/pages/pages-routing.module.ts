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
import { SellComponent } from './sell/sell.component';
import { OrderSuccessComponent } from './order-success/order-success.component';


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
        path: 'sell',
        component: SellComponent
      },
      {
        path: 'order-success',
        component: OrderSuccessComponent
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
