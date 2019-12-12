import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import { SellRoutingModule } from './sell-routing.module';
import { SellComponent } from './sell.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';  

@NgModule({
  imports: [
   SellRoutingModule,
   ReactiveFormsModule,
   CommonModule,
   NgxPaginationModule,
   FormsModule
  ],
  declarations: [SellComponent]
})
export class SellModule { }