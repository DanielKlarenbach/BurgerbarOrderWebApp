import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ContactData} from '../models/contactData'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactData: ContactData;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let obs = this.http.get<ContactData>('/contactdata');
    obs.subscribe((response) =>  this.contactData=response);
  }

}
