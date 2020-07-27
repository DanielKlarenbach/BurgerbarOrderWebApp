import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {User} from '../models/user'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  password : string;
  secondPassword: string;

  constructor(private route: ActivatedRoute,private router: Router, private http: HttpClient ) {   }

  ngOnInit(): void {
  }

  handleRegistration(): void{
    let obs = this.http.post<User>('http://localhost:8081/register',new User(this.username,this.password));
    obs.subscribe((response) =>  console.log(response));
  }
}
