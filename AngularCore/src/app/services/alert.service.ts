import { Alert } from './../models/Alert';
import { Injectable, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable()
// TODO: Introduce interface IAlertService and provide different notification implementations
// (possibly provide ability to select notification implementation in new project wizard)

// TODO: Expose notification events so custom alert services can be implemented in application components 
// and be subscribed to serrvice alert event
export class AlertService {

  // TODO: Refacor, reduce amount of emiters, add type enum or string to Alert type
  public successAlerted: EventEmitter<Alert> = new EventEmitter<Alert>();
  public warningAlerted: EventEmitter<Alert> = new EventEmitter<Alert>();
  public errorAlerted:   EventEmitter<Alert> = new EventEmitter<Alert>();
  public infoAlerted:    EventEmitter<Alert> = new EventEmitter<Alert>();

  constructor() { }

  success(message: string, title?: string) {
    let alert = new Alert(message, title);
    this.successAlerted.emit(alert);

    console.log("SUCCESS", message);

    if (title)
      console.log("TITLE", title);
  }

  warning(message: string, title?: string) {
    let alert = new Alert(message, title);
    this.warningAlerted.emit(alert);

    console.log("WARNING", message);

    if (title)
      console.log("TITLE", title);
  }

  error(message: string, title?: string) {
    let alert = new Alert(message, title);
    this.errorAlerted.emit(alert);

    console.log("ERROR", message);

    if (title)
      console.log("TITLE", title);
  }

  info(message: string, title?: string) {
    let alert = new Alert(message, title);
    this.infoAlerted.emit(alert);

    console.log("INFO", message);

    if (title)
      console.log("TITLE", title);
  }
}