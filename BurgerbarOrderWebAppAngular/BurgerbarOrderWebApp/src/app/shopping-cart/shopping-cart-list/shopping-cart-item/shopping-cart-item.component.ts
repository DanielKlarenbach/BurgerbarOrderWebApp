import { Component, OnInit, Input } from '@angular/core';
import { Dish } from 'src/app/models/dish';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() dish: Dish;

  constructor() { }

  ngOnInit(): void {
  }

}
