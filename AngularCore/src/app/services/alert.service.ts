import { Alert } from './../models/Alert';
import { Injectable, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AlertTypes } from '../models/enums/AlertTypes';

@Injectable()
// TODO: Introduce interface IAlertService and provide different notification implementations
// (possibly provide ability to select notification implementation in new project wizard)

export class AlertService {
  
  public alerted: EventEmitter<Alert> = new EventEmitter<Alert>();

  constructor() { }

  success(message: string, title?: string) {
    let alert = new Alert(message, title, AlertTypes.Success);
    this.alerted.emit(alert);
  }

  warning(message: string, title?: string) {
    let alert = new Alert(message, title, AlertTypes.Warning);
    this.alerted.emit(alert);
  }

  error(message: string, title?: string) {
    let alert = new Alert(message, title, AlertTypes.Danger);
    this.alerted.emit(alert);
  }

  info(message: string, title?: string) {
    let alert = new Alert(message, title, AlertTypes.Info);
    this.alerted.emit(alert);
  }
}