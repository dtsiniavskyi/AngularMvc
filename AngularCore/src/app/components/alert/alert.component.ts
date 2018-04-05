import { Alert } from './../../models/Alert';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { AlertTypes } from '../../models/enums/AlertTypes';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})

export class AlertComponent implements OnInit {

  alert: Alert = undefined;
  isVisible: boolean = false;

  constructor(public alertService: AlertService) { }

  ngOnInit() {
    this.alertService.alerted.subscribe(alert => {

      // Show alert
      this.isVisible = true;
      this.alert = alert;

      // Hide alert after 3 seconds
      setTimeout(() => {
        this.isVisible = false;
      }, 3000);
    });
  }
}