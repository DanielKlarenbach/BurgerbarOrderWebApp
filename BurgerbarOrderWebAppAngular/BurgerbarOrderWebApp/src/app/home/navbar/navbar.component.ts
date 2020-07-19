import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,DoCheck {
  userName: string;

  constructor(private authenticationService: AuthService) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void{
    this.userName=sessionStorage.getItem('authenticatedUser');
  }

  handleLogout() {
    this.authenticationService.logout();
  }

}
