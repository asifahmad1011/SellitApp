import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeNineComponent } from './home-9/home-nine.component';

import { CollectionLeftSidebarComponent } from './product/collection/collection-left-sidebar/collection-left-sidebar.component';
import { CollectionRightSidebarComponent } from './product/collection/collection-right-sidebar/collection-right-sidebar.component';
import { ProductRightSidebarComponent } from './product/product-details/product-right-sidebar/product-right-sidebar.component';
import { ProductColLeftComponent } from './product/product-details/product-col-left/product-col-left.component';
import { ProductColRightComponent } from './product/product-details/product-col-right/product-col-right.component';
import { ProductColumnComponent } from './product/product-details/product-column/product-column.component';
import { ProductAccordianComponent } from './product/product-details/product-accordian/product-accordian.component';
import { ProductLeftImageComponent } from './product/product-details/product-left-image/product-left-image.component';
import { ProductRightImageComponent } from './product/product-details/product-right-image/product-right-image.component';
import { ProductVerticalTabComponent } from './product/product-details/product-vertical-tab/product-vertical-tab.component';
import { SearchComponent } from './product/search/search.component';



// Routes
const routes: Routes = [
  { 
    path: 'nine',
    component: HomeNineComponent
  },
  
  {
    path: 'left-sidebar/collection/:category',
    component: CollectionLeftSidebarComponent
  },
  {
    path: 'right-sidebar/collection/:category',
    component: CollectionRightSidebarComponent
  },

  {
    path: 'right-sidebar/product/:id',
    component: ProductRightSidebarComponent
  },
  {
    path: 'col-left/product/:id',
    component: ProductColLeftComponent
  },
  {
    path: 'col-right/product/:id',
    component: ProductColRightComponent
  },
  {
    path: 'column/product/:id',
    component: ProductColumnComponent
  },
  {
    path: 'accordian/product/:id',
    component: ProductAccordianComponent
  },
  {
    path: 'left-image/product/:id',
    component: ProductLeftImageComponent
  },
  {
    path: 'right-image/product/:id',
    component: ProductRightImageComponent
  },
  {
    path: 'vertical/product/:id',
    component: ProductVerticalTabComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
