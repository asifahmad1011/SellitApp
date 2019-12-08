import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';  

@NgModule({
  imports: [
   RegisterRoutingModule,
   ReactiveFormsModule,
   CommonModule,
   NgxPaginationModule,
   FormsModule
  ],
  declarations: [RegisterComponent]
})
export class SearchModule { }