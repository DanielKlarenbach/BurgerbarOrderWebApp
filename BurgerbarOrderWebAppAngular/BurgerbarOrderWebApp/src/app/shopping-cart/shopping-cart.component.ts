import { Component, OnInit, DoCheck } from '@angular/core';
import {ShoppingCartService} from '../services/shopping-cart/shopping-cart.service'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  sendOrder(): void{
    this.shoppingCartService.sendOrder();
  }

}
