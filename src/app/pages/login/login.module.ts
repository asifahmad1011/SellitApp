import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
   LoginRoutingModule,
   ReactiveFormsModule,
   CommonModule,
   NgxPaginationModule
  ],
  declarations: [LoginComponent]
})
export class SearchModule { }