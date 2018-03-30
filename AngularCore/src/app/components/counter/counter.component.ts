import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {
  count:number = 0;

  constructor() { }

  ngOnInit() {
  }

  increment():void{
    this.count++;
  }

}
