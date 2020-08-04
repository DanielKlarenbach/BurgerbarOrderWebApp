import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';
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
  currentPage: number = 1;
  numberOfPages: number;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log("INIT")
    let obs = this.http.get<Dish[]>('http://localhost:8081/dishes');
    obs.subscribe((response) => {
      this.dishes = response;
      this.currentPage = 1;
      this.numberOfPages = Math.ceil(this.dishes.length / 6) + 1;
      console.log(this.dishes)
    });
  }

  ngOnChanges(): void {
    if (!(this.currentCategory == null)) {
      let obs = this.http.get<Dish[]>('http://localhost:8081/dishes' + this.currentCategory);
      obs.subscribe((response) => {
        this.dishes = response;
        this.currentPage = 1;
        this.numberOfPages = Math.ceil(this.dishes.length / 6);
        console.log(this.dishes)
      });
    }
  }

  setCurrentCategoryIndex($event): void {
    this.currentPage = $event;
  }

  checkPage(index: number): boolean {
    if (index >= (this.currentPage - 1) * 6 && index < (this.currentPage - 1) * 6 + 6) return true;
    else return false;
  }
}
