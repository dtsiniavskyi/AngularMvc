import { AlertService } from './../../../services/alert.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  
  // TODO: Refactor, remove this flag
  invalidLogin: boolean;

  constructor(
    private router: Router,
    private auth: AuthService,
    private alert: AlertService
  ) { }

  ngOnInit() { }

  signIn(credentials) {
    console.log(credentials);   

    this.auth.login(credentials)
      .subscribe(result => {
        if (result)
          this.router.navigate(['/']);
        else          
          // TODO: move string all literals to some kind of resources to avoid string hardcoding
          this.alert.error("Invalid user name or password");
      });
  }
}
