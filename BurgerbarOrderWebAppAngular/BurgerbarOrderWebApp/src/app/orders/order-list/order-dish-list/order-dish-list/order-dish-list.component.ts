import { Component, OnInit,Input } from '@angular/core';
import { Order } from 'src/app/models/order';
import { HttpClient } from '@angular/common/http';
import { OrderItem } from 'src/app/models/orderItem';

@Component({
  selector: '[app-order-dish-list]',
  templateUrl: './order-dish-list.component.html',
  styleUrls: ['./order-dish-list.component.css']
})
export class OrderDishListComponent implements OnInit {
  @Input() order: Order;
  orderItems: OrderItem[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let obs = this.http.get<OrderItem[]>('/activeorders/'+this.order.id);
    obs.subscribe((response) => {
      this.orderItems = response;
    });
  }

}
