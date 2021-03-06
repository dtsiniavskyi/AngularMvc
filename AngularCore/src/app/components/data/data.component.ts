import { Component, OnInit } from '@angular/core';
import { ValuesService } from '../../services/values.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html'
})
export class DataComponent implements OnInit {
  values: string[];

  constructor(public _service: ValuesService) { }

  //TODO: Add Base component with isLoaded property
  //TODO: Add loading component  

  ngOnInit() {
    this._service.getValues().subscribe(values => {
      this.values = values;
    });
  }

}
