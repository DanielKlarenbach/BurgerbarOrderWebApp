import { Injectable } from '@angular/core';
import {Dish} from '../../models/dish'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  order: Dish[]= new Array();

  constructor(private http: HttpClient) { }

  addToCart(dish: Dish): void{
    this.order.push(dish);
  }

  getOrder(): Dish[]{
    return this.order;
  }

  sendOrder(): void{
    let obs = this.http.post<Dish[]>('http://localhost:8081/order',this.order);
    obs.subscribe(() =>  console.log("got response"));
    this.order=[];
  }
}
