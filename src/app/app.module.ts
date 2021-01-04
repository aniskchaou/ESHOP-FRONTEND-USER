import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductService } from './services/product-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { ProductsListComponent } from './components/products-list/products-list.component';
import {HttpClientModule} from '@angular/common/http'

import { RouterModule,Routes } from '@angular/router';
import { CategoryMenuComponent } from './components/category-menu/category-menu.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';

import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { BannerComponent } from './banner/banner.component';
import { ProductAreaComponent } from './components/product-area/product-area.component';
import { FooterComponent } from './components/footer/footer.component';
import { MediumBannerComponent } from './components/medium-banner/medium-banner.component';
import { PopularComponent } from './components/popular/popular.component';
import { ShopHomeComponent } from './components/shop-home/shop-home.component';
import { CountDownComponent } from './components/count-down/count-down.component';
import { ShopBlogComponent } from './components/shop-blog/shop-blog.component';
import { ServiceComponent } from './components/service/service.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ModalComponent } from './components/modal/modal.component';
import { ShopGridComponent } from './components/shop-grid/shop-grid.component';

//routes
const routes:Routes=[
  {path:'search/:keyword',component:ProductAreaComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'cart-details',component:CartDetailsComponent},
  {path:'products/:id',component:ProductDetailsComponent},
  {path:'category/:id',component:ProductAreaComponent},
  {path:'category',component:ProductAreaComponent},
  {path:'home',component:ProductAreaComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',redirectTo:'home',pathMatch:'full'}]


@NgModule({
  declarations: [//components
    AppComponent,
    ProductsListComponent,
    CategoryMenuComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    SearchComponent,
    FooterComponent,
    HeaderComponent,
    SliderComponent,
    BannerComponent,
    ProductAreaComponent,
    MediumBannerComponent,
    PopularComponent,
    ShopHomeComponent,
    CountDownComponent,
    ShopBlogComponent,
    ServiceComponent,
    NewsletterComponent,
    ModalComponent,
    ShopGridComponent
  ],
  imports: [ //modules
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpClientModule,
    MatListModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule
  ],
   providers: [ProductService],
  bootstrap: [AppComponent]
})



export class AppModule { }
