import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/models/order';
import { Dish } from 'src/app/models/dish';
import { HttpClient } from '@angular/common/http';
import { OrderItem } from 'src/app/models/orderItem';


@Component({
  selector: '[app-order-list-item]',
  templateUrl: './order-list-item.component.html',
  styleUrls: ['./order-list-item.component.css']
})
export class OrderListItemComponent implements OnInit {
  @Input() order: Order;
  orderItems: OrderItem[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let obs = this.http.get<OrderItem[]>('http://localhost:8081/activeorders/'+this.order.id);
    obs.subscribe((response) => {
      this.orderItems = response;
    });
  }

}
