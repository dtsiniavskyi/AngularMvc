import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { RegisterService } from '../../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  constructor(
    private router: Router,
    private reg: RegisterService
  ) { }

  ngOnInit() { }

  register(registreModel){
    console.log(registreModel);

    this.reg.register(registreModel).subscribe(res => {
      console.log("OK", res);
    },
    error => {
      console.warn("BAD", error);
    });
  }

}