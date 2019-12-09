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
import { SellComponent } from './sell/sell.component';
import { CollectionComponent } from './collection/collection.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaqComponent } from './faq/faq.component';
import { GridTwoColComponent } from './portfolio/grid-two-col/grid-two-col.component';
import { GridThreeColComponent } from './portfolio/grid-three-col/grid-three-col.component';
import { GridFourColComponent } from './portfolio/grid-four-col/grid-four-col.component';
import { MasonaryTwoGridComponent } from './portfolio/masonary-two-grid/masonary-two-grid.component';
import { MasonaryThreeGridComponent } from './portfolio/masonary-three-grid/masonary-three-grid.component';
import { MasonaryFourGridComponent } from './portfolio/masonary-four-grid/masonary-four-grid.component';
import { MasonaryFullwidthComponent } from './portfolio/masonary-fullwidth/masonary-fullwidth.component';


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
    ContactComponent,
    DashboardComponent,
    FaqComponent,
    GridTwoColComponent,
    GridThreeColComponent,
    GridFourColComponent,
    MasonaryTwoGridComponent,
    MasonaryThreeGridComponent,
    MasonaryFourGridComponent,
    MasonaryFullwidthComponent,
    SellComponent,
  ]
})
export class PagesModule { }
