import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { IsotopeModule } from 'ngx-isotope';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { SellComponent } from './sell/sell.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ChatComponent } from './Chat/chat.component';
import { UpdateProfileComponent } from './update-profile/update-profile/update-profile.component';
/* Shared Service */


@NgModule({
  exports: [AboutUsComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    DashboardComponent,
    SellComponent,
    OrderSuccessComponent,
    DashboardComponent,
    ChatComponent,],

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
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    DashboardComponent,
    SellComponent,
    OrderSuccessComponent,
    DashboardComponent,
    ChatComponent,
    UpdateProfileComponent,
  ],
})
export class PagesModule { }
