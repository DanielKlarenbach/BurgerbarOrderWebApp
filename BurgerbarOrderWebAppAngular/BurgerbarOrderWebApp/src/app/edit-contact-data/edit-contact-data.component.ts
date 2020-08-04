import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ContactData} from '../models/contactData'

@Component({
  selector: 'app-edit-contact-data',
  templateUrl: './edit-contact-data.component.html',
  styleUrls: ['./edit-contact-data.component.css']
})
export class EditContactDataComponent implements OnInit {
  email: string;
  phoneNumber: string;
  description: string;
  address: string;

  constructor( private http: HttpClient) { }

  ngOnInit(): void {
  }
  
  editContactData(): void{
    let contactData = new ContactData(this.phoneNumber,this.email,this.address, this.description);
    let obs=this.http.put<ContactData>('http://localhost:8081/edit/editcontactdata',contactData);
    obs.subscribe((response) =>  console.log(response));

  }
}
