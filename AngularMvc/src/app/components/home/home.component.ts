import { Component, OnInit } from '@angular/core';
import { ValuesService } from '../../services/values.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  values: string[];

  constructor(public _service: ValuesService) { }

  ngOnInit() {
    this._service.getValues().subscribe(v => {
      this.values = v;
    });
  }

}