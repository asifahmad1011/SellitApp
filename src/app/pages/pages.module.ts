import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { IsotopeModule } from 'ngx-isotope';
import { ReactiveFormsModule } from '@angular/forms';
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
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { SellComponent } from './sell/sell.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
/* Shared Service */


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    SlickCarouselModule,
    IsotopeModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
  ],
  declarations: [
    AboutUsComponent,
    ErrorPageComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    CollectionComponent,
    ForgetPasswordComponent,
    DashboardComponent,
    FaqComponent,
    SellComponent,
    OrderSuccessComponent,
  ],
})
export class PagesModule { }
