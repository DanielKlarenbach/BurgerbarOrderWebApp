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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
