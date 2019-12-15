import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeNineComponent } from './home-9/home-nine.component';
import { ProfileComponent } from './profile/profile.component';

import { CollectionLeftSidebarComponent } from './product/collection/collection-left-sidebar/collection-left-sidebar.component';
import { CollectionRightSidebarComponent } from './product/collection/collection-right-sidebar/collection-right-sidebar.component';
import { ProductRightSidebarComponent } from './product/product-details/product-right-sidebar/product-right-sidebar.component';
import { SearchComponent } from './product/search/search.component';
import { CollectionNoSidebarComponent } from './product/collection/collection-no-sidebar/collection-no-sidebar.component';



// Routes
const routes: Routes = [
  { 
    path: 'nine',
    component: HomeNineComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  
  {
    path: 'left-sidebar/collection/:category_id',
    component: CollectionLeftSidebarComponent
  },
  {
    path: 'right-sidebar/collection/:category_id',
    component: CollectionRightSidebarComponent
  },
  {
    path: 'no-sidebar/collection/:category_id',
    component: CollectionNoSidebarComponent
  },
  {
    path: 'right-sidebar/product/:id',
    component: ProductRightSidebarComponent
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
