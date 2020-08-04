import { Component, OnInit } from '@angular/core';
import { ContactData } from 'src/app/models/contactData';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  contactData: ContactData;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let obs = this.http.get<ContactData>('http://localhost:8081/contactdata'); 
    obs.subscribe((response) =>  
    {
      this.contactData=response;
    });
  }
}
