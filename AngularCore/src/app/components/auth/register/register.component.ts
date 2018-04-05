import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { RegisterService } from '../../../services/register.service';
import { AlertService } from './../../../services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  constructor(
    private router: Router,
    private reg: RegisterService,
    private alert: AlertService
  ) { }

  ngOnInit() { }

  register(registreModel) {
    // TODO: Clean up all console.logs when they are no longer required
    console.log(registreModel);

    this.reg.register(registreModel)
      .subscribe(
        res => {
          // TODO: Move string literals to some kind of resources
          this.alert.success('Registration successful.', 'Success!');
          this.router.navigate(['/login']);
        },
        error => {
          this.alert.error('Registration Failed.', 'Error!');
        });
  }
}