import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';


@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.css']
})
export class ShoppingCartListComponent implements OnInit {

  constructor(public shoppingCart: ShoppingCartService) { }

  ngOnInit(): void {
  }

}
