import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {
  name: string;
  price: number;
  description: string;

  constructor() { }

  ngOnInit(): void {
  }
  
  send(): void{


  }

}
