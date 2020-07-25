import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password : string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(private route: ActivatedRoute,private router: Router,private authenticationService: AuthService) {   }

  ngOnInit() {
  }

  handleLogin() {
    this.authenticationService.authenticationService(this.username, this.password).subscribe((result)=> {
      //if succes
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['']);
    }, () => {
      // if failure
      this.invalidLogin = true;
      this.loginSuccess = false;
    });      
  }

}