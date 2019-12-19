import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import { RegisterRoutingModule } from './register-routing.module';

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
  declarations: []
})
export class RegisterModule { }