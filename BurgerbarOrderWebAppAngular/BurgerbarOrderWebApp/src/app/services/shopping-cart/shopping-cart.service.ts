import { Injectable } from '@angular/core';
import {Dish} from '../../models/dish'
import {OrderItem} from '../../models/orderItem'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  order: OrderItem[]= new Array();

  constructor(private http: HttpClient) { }

  addToCart(orderItem: OrderItem): void{
    this.order.push(orderItem);
  }

  getOrder(): OrderItem[]{
    return this.order;
  }

  sendOrder(): void{
    let obs = this.http.post<OrderItem[]>('http://localhost:8081/order',this.order);
    obs.subscribe(() =>  console.log("got response"));
    this.order=[];
  }
}
