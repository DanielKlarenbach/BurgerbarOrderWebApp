import { Component, OnInit, DoCheck } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  toPay: number;

  constructor(public shoppingCart: ShoppingCartService) { }

  ngOnInit(): void {
    this.toPay=this.countBill();
  }

  countBill(): number{
    let sum: number=0;
    for(let orderItem of this.shoppingCart.getOrder()) sum+=orderItem.dish.price*orderItem.quantity;
    console.log(this.shoppingCart.getOrder())
    return sum;
  }
}
