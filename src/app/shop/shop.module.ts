import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BarRatingModule } from "ngx-bar-rating";
import { RangeSliderModule  } from 'ngx-rangeslider-component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxPayPalModule } from 'ngx-paypal';
import { NgxImgZoomModule } from 'ngx-img-zoom';


// home-nine components
import { HomeNineComponent } from './home-9/home-nine.component';
import { HomeBannerComponent } from './home-9/home-banner/home-banner.component';
import { CollectionBannerNineComponent } from './home-9/collection-banner/collection-banner.component';
import { ProductTabNineComponent } from './home-9/product-tab/product-tab.component';

// Products Components 
import { ProductComponent } from './product/product.component';
import { CollectionRightSidebarComponent } from './product/collection/collection-right-sidebar/collection-right-sidebar.component';
import { ProductRightSidebarComponent } from './product/product-details/product-right-sidebar/product-right-sidebar.component';
import { SidebarComponent } from './product/product-details/sidebar/sidebar.component';
import { CategoriesComponent } from './product/widgets/categories/categories.component';
import { NewProductComponent } from './product/widgets/new-product/new-product.component';
import { SearchComponent } from './product/search/search.component';

import { ProfileComponent } from './profile/profile.component';


@NgModule({
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ShopRoutingModule,
    SharedModule,
    SlickCarouselModule,
    BarRatingModule,
    RangeSliderModule,
    InfiniteScrollModule,
    NgxPayPalModule,
    NgxImgZoomModule,
  ],
  declarations: [
  
    // Home Nine
    HomeNineComponent,
    HomeBannerComponent,
    CollectionBannerNineComponent,
    ProductTabNineComponent,
    ProfileComponent,
    
    // Product
    ProductComponent,
    CollectionRightSidebarComponent,
    ProductRightSidebarComponent,
    SidebarComponent,
    CategoriesComponent,
    NewProductComponent,
    SearchComponent,
  ]
})
export class ShopModule { }
