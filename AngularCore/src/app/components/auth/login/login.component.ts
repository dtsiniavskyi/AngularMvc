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
    private auth: AuthService
  ) { }

  ngOnInit() { }

  signIn(credentials) {
    console.log(credentials);   

    this.auth.login(credentials)
      .subscribe(result => {
        if (result)
          this.router.navigate(['/']);
        else
          // TODO: Implement some better error handling, add error component or directive
          this.invalidLogin = true;
      });
  }
}
