import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { Alert } from '../../models/Alert';
import { AlertTypes } from '../../models/enums/AlertTypes';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})

export class AlertComponent implements OnInit {

  title: string = undefined;
  message: string = '';
  type: AlertTypes = AlertTypes.Success;

  isVisible: boolean = false;

  constructor(public alertService: AlertService) { }

  ngOnInit() {
    this.alertService.successAlerted.subscribe(alert => {
      console.log("SUCCESS", alert.message);
      if (alert.title)
        console.log("TITLE", alert.title);

      this.isVisible = true;
      this.title = alert.title;
      this.message = alert.message;
      this.type = AlertTypes.Success;

      setTimeout(() => {
        this.isVisible = false;
      }, 3000);


    });
  }
}
