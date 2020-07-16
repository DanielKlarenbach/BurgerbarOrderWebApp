import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './main/menu/menu.component';
import { DishListComponent } from './main/dish-list/dish-list.component';
import { LoginBarComponent } from './login-bar/login-bar.component';
import { MenuItemComponent } from './main/menu/menu-item/menu-item.component';
import { DishComponent } from './main/dish-list/dish/dish.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    DishListComponent,
    LoginBarComponent,
    MenuItemComponent,
    DishComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
