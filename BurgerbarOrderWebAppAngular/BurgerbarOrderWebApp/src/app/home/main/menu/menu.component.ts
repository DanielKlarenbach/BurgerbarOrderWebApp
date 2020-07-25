import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Category} from 'src/app/models/category';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  categories: Category[];
  @Output() currentCategory = new EventEmitter<string>();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log("init");
    let obs = this.http.get<Category[]>('http://localhost:8081/categories');
    obs.subscribe((response) =>  this.categories=response);
  }

  showCategory(category: string): void{
    this.currentCategory.emit(category);
  }
}
