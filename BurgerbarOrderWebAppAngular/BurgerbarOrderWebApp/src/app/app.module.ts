import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FootComponent } from './foot/foot.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { LoginBarComponent } from './login-bar/login-bar.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { DishComponent } from './dish-list/dish/dish.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FootComponent,
    FooterComponent,
    MenuComponent,
    DishListComponent,
    LoginBarComponent,
    MenuItemComponent,
    DishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
