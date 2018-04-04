import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService
  ){}

  canActivate() {
    if(this.auth.isLoggedIn())
      return true;

    this.router.navigate(['/login']);
    return false;
  }
}