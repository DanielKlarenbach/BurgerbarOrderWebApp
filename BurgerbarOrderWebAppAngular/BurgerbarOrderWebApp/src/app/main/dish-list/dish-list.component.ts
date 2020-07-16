import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dish } from 'src/app/models/dish';


@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit, OnChanges {
  @Input() currentCategory: string;
  dishes: Dish[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    let obs = this.http.get<Dish[]>('http://localhost:8081/dishes/'+this.currentCategory);
    obs.subscribe((response) =>  this.dishes=response);
  }

}
