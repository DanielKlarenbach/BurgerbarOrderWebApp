import { Component, OnInit, Input } from '@angular/core';
import { Dish } from 'src/app/models/dish';
import { OrderItem } from 'src/app/models/orderItem';

@Component({
  selector: '[app-shopping-cart-item]',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() orderItem: OrderItem;

  constructor() { }

  ngOnInit(): void {
  }

}
