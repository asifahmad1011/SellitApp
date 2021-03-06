import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShopModule } from "./shop/shop.module";
import { SharedModule } from "./shared/shared.module";
import { ToastrModule } from 'ngx-toastr';
import { rootRouterConfig } from './app.routes';

// import { LoginService } from './pages/login/login.service';
// import ngx-translate and the http loader
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
// components
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import * as $ from 'jquery';
import { NgxPaginationModule } from 'ngx-pagination';

/* App Root */

/* Feature Components */
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './shop/profile/profile.component';
import { SettingComponent } from './shared/header/widgets/settings/settings.component';
import { SearchComponent } from './shop/product/search/search.component';
import { ProductTabNineComponent } from './shop/home-9/product-tab/product-tab.component';
import { CollectionBannerNineComponent } from './shop/home-9/collection-banner/collection-banner.component';
import { HomeBannerComponent } from './shop/home-9/home-banner/home-banner.component';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
   return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  exports: [   ],


  declarations: [
    AppComponent,
    MainComponent,
    SearchComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    // LoginService,
    BrowserAnimationsModule,
    ShopModule,
    SharedModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    ToastrModule.forRoot({
      timeOut: 2000,
      progressBar: false,
      enableHtml: true,
    }),
    RouterModule.forRoot(rootRouterConfig, { useHash: false, anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent, SettingComponent]
})
export class AppModule { }
