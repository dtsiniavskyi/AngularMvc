import { Injectable } from '@angular/core';

@Injectable()
// TODO: Introduce interface IAlertService and provide different notification implementations
// (possibly provide ability to select notification implementation in new project wizard)

// TODO: Expose notification event so custom alert services can be implemented in application components 
// and be subscribed to serrvice alert event
export class AlertService {

  constructor() { }

  success(message) {
    console.log("SUCCESS", message);
  }

  warning(message) {
    console.warn("WARNING", message);
  }

  error(message) {
    console.error("ERROR", message);
  }

  info(message) {
    console.info("INFO", message);
  }
}