import { Injectable } from '@angular/core';
import {Dish} from '../../models/dish'

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  order: Dish[]= new Array();

  constructor() { }

  addToCart(dish: Dish): void{
    this.order.push(dish);
  }

  getOrder(): Dish[]{
    return this.order;
  }
}
