import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { Order } from 'src/app/models/order';
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
  @Output() endOrderEvent = new EventEmitter<string>();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let obs = this.http.get<OrderItem[]>('http://localhost:8081/activeorders/'+this.order.id);
    obs.subscribe((response) => {
      this.orderItems = response;
    });
  }

  endOrder(): void{
    console.log("endorder")
    this.order.isActive=false;
    let obs = this.http.put<Order>('http://localhost:8081/endorder',this.order);
    obs.subscribe((response) => {
      console.log(response);
      this.endOrderEvent.emit("true");
    });

  }

}
