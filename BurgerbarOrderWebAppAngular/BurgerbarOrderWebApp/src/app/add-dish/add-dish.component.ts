import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../models/dish';
import { HttpClient } from '@angular/common/http';
import {Category} from '../models/category';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {
  categories: Category[];
  addName: string;
  price: number;
  description: string;
  category: string;

  deleteName: string;

  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    let obs = this.http.get<Category[]>('http://localhost:8081/categories');
    obs.subscribe((response) =>  this.categories=response);
  }
  
  addDish(): void{
    let dish = new Dish(this.addName,this.description,this.price, this.category);
    let obs=this.http.post<Dish>('http://localhost:8081/edit/adddish',dish);
    obs.subscribe((response) =>  console.log(response));

  }

  deleteDish(): void{
    let obs=this.http.delete('http://localhost:8081/edit/deletedish/'+this.deleteName);
    obs.subscribe((response) =>  console.log(response));
  }

}
