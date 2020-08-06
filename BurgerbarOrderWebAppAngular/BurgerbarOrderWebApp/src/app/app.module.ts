import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './home/footer/footer.component';
import { MenuComponent } from './home/main/menu/menu.component';
import { DishListComponent } from './home/main/dish-list/dish-list.component';
import { MenuItemComponent } from './home/main/menu/menu-item/menu-item.component';
import { DishComponent } from './home/main/dish-list/dish/dish.component';
import { MainComponent } from './home/main/main.component';
import { PaginationComponent } from './home/main/dish-list/pagination/pagination.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth-service/auth.service';
import { ShoppingCartService } from './services/shopping-cart/shopping-cart.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartItemComponent } from './shopping-cart/shopping-cart-list/shopping-cart-item/shopping-cart-item.component';
import { ShoppingCartListComponent } from './shopping-cart/shopping-cart-list/shopping-cart-list.component';
import {HttpInterceptorService} from './services/http-interceptor/httpinterceptor.service';
import { RegisterComponent } from './register/register.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { EditContactDataComponent } from './edit-contact-data/edit-contact-data.component';
import { BillComponent } from './shopping-cart/bill/bill.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { OrderListItemComponent } from './orders/order-list/order-list-item/order-list-item.component';
import { OrderDishListComponent } from './orders/order-list/order-dish-list/order-dish-list/order-dish-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    DishListComponent,
    MenuItemComponent,
    DishComponent,
    MainComponent,
    PaginationComponent,
    HomeComponent,
    LoginComponent,
    ShoppingCartComponent,
    ShoppingCartItemComponent,
    ShoppingCartListComponent,
    RegisterComponent,
    AddDishComponent,
    EditContactDataComponent,
    BillComponent,
    OrdersComponent,
    OrderListComponent,
    OrderListItemComponent,
    OrderDishListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService, ShoppingCartService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
