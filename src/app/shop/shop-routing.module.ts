import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeNineComponent } from './home-9/home-nine.component';
import { ProfileComponent } from './profile/profile.component';
import { CollectionRightSidebarComponent } from './product/collection/collection-right-sidebar/collection-right-sidebar.component';
import { ProductRightSidebarComponent } from './product/product-details/product-right-sidebar/product-right-sidebar.component';
import { SearchComponent } from './product/search/search.component';




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
    path: 'right-sidebar/collection/:category_id',
    component: CollectionRightSidebarComponent
  },

  {
    path: 'right-sidebar/product/:id',
    component: ProductRightSidebarComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
