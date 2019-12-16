import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CollectionNoSidebarComponent} from "./collection-no-sidebar.component";

const routes: Routes = [
  { path: '', component: CollectionNoSidebarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionRouting {     
 }