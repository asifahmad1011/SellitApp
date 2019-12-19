import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import { SettingRoutingModule } from './settings-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
   SettingRoutingModule,
   ReactiveFormsModule,
   CommonModule,
   NgxPaginationModule,
   FormsModule,
  ],
  declarations: []
})
export class SettingModule { }