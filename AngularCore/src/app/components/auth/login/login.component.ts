import { AlertService } from './../../../services/alert.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../../../services/auth.service';

// declare var $;
// declare var Popper;

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
      .subscribe(
        result => {
          if (result){
            this.alert.success('Sign In Successfull.', 'Success!');
            this.router.navigate(['/']);
          }            
          else
            // TODO: move string all literals to some kind of resources to avoid string hardcoding
            this.alert.error("Invalid user name or password", 'Error!');
        },
        error => {
          this.alert.error("Invalid user name or password", 'Error!');

          // TODO: Create Error Handler Service that will hanle errors from modelstate object
          
          // let errors = error.json();
          // for(var i=0;i<errors.length; i++){
          //   let key = errors[i];
          //   let input = document.getElementsByName(key)[0];

          //   let popper = new Popper();
          // }

          // console.log(error);
          // this.alert.error('', 'Error!');
        });
  }
}
