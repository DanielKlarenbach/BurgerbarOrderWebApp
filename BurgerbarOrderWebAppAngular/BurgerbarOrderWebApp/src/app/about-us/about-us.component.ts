import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactData } from '../models/contactData';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  description: String;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let obs = this.http.get<ContactData>('/contactdata');
    obs.subscribe((response) =>  this.description=response.description);
  }

}
