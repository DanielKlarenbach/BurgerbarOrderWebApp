import { Component, OnInit, Input } from '@angular/core';
import { Dish } from 'src/app/models/dish';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {
  @Input() dish: Dish;

  constructor(private shoppingCart: ShoppingCartService) { }

  ngOnInit(): void {
  }

  addToCart(): boolean{
    this.shoppingCart.addToCart(this.dish);
    return false;
  }
}
