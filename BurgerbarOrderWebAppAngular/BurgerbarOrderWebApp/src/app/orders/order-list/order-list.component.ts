import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../../models/order'



@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Order[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let obs = this.http.get<Order[]>('/activeorders');
    obs.subscribe((response) => {
      this.orders = response;
    });
  }

  getActiveOrders(){
    let obs = this.http.get<Order[]>('/activeorders');
    obs.subscribe((response) => {
      this.orders = response;
    });
  }
}
