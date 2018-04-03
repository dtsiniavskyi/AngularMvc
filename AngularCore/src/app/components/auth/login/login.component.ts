import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

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
          this.invalidLogin = true;
      });
  }
}
