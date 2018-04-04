import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  public year:number;
  @Input() public isLoggedIn:boolean;

  constructor() { }

  ngOnInit() {
    this.year = new Date().getFullYear();
  }

}
