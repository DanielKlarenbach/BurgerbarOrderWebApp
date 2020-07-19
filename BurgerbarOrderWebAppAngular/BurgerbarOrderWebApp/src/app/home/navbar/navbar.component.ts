import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,DoCheck {
  userName: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void{
    console.log(sessionStorage.getItem('authenticatedUser'))
    this.userName=sessionStorage.getItem('authenticatedUser');
  }

}
