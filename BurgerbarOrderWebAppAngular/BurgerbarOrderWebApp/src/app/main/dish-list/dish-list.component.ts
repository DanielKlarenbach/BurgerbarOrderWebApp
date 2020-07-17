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
  firstIdFromCurrentCategory: number=0;
  dishes: Dish[];
  currentPage: number=1;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log(this.currentCategory);
    let obs = this.http.get<Dish[]>('http://localhost:8081/dishes/'+this.currentCategory+'/0'); // w tym jest problem, musisz jakoś pierwsze indeksy wziać - mapa, albo czesc tablic w ngFor
    obs.subscribe((response) =>  
    {
      this.dishes=response;
      if(this.firstIdFromCurrentCategory==0) this.firstIdFromCurrentCategory=this.dishes[0].id;
    });
  }

  setCurrentCategoryIndex($event): void{
    this.currentPage=$event;
    let tempIndex;
    tempIndex='/'+(this.firstIdFromCurrentCategory+(this.currentPage-1)*6).toString();
    console.log(tempIndex);
    let obs = this.http.get<Dish[]>('http://localhost:8081/dishes/'+this.currentCategory+tempIndex);
    obs.subscribe((response) =>  
    {
      this.dishes=response;
      if(this.firstIdFromCurrentCategory==0) this.firstIdFromCurrentCategory=this.dishes[0].id;
    });
  }

}
