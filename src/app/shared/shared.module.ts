import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { TranslateModule } from '@ngx-translate/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
// Services
import { WINDOW_PROVIDERS } from "./services/windows.service";
import { LandingFixService } from '../shared/services/landing-fix.service';
import { InstagramService } from "./services/instagram.service";
import { ProductsService } from "./services/products.service";
import { PaginationService } from "./classes/paginate";
import { SettingsService } from "./header/widgets/settings/settings.service";
// Pipes
import { OrderByPipe } from './pipes/order-by.pipe';
// components
import { HeaderOneComponent } from './header/header-one/header-one.component';
import { TopbarOneComponent } from './header/widgets/topbar/topbar-one/topbar-one.component';
import { NavbarComponent } from './header/widgets/navbar/navbar.component';
import { SettingComponent } from './header/widgets/settings/settings.component';
import { LeftMenuComponent } from './header/widgets/left-menu/left-menu.component';
import { FooterOneComponent } from './footer/footer-one/footer-one.component';
import { InformationComponent } from './footer/widgets/information/information.component';
import { WhyWeChooseComponent } from './footer/widgets/why-we-choose/why-we-choose.component';
import { CopyrightComponent } from './footer/widgets/copyright/copyright.component';
import { SocialComponent } from './footer/widgets/social/social.component';


@NgModule({
  exports: [
    CommonModule,
    TranslateModule,
    HeaderOneComponent,
    FooterOneComponent,
    OrderByPipe,
    NgxPaginationModule,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule, 
    NgxPaginationModule
  ],
  declarations: [
    HeaderOneComponent,
    FooterOneComponent,
    OrderByPipe,
    NavbarComponent,
    SettingComponent,
    LeftMenuComponent,
    TopbarOneComponent,
    InformationComponent,
    WhyWeChooseComponent,
    CopyrightComponent,
    SocialComponent, 
  ],
  providers: [
    WINDOW_PROVIDERS,
    LandingFixService,
    InstagramService,
    ProductsService,
    PaginationService, 
    SettingsService,
  ]
})
export class SharedModule { }
