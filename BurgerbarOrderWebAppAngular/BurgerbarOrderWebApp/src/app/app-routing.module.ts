import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RegisterComponent } from './register/register.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { EditContactDataComponent } from './edit-contact-data/edit-contact-data.component';
import { OrdersComponent } from './orders/orders.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent, runGuardsAndResolvers: 'always' },
  { path: 'login', component: LoginComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'add-dish', component: AddDishComponent },
  { path: 'edit-contact-data', component: EditContactDataComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: true, onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
