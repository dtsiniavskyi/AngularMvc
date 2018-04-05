import { Injectable } from '@angular/core';

@Injectable()
// TODO: Introduce interface IAlertService and provide different notification implementations
// (possibly provide ability to select notification implementation in new project wizard)

// TODO: Expose notification event so custom alert services can be implemented in application components 
// and be subscribed to serrvice alert event
export class AlertService {

  constructor() { }

  success(message: string, title?: string) {
    console.log("SUCCESS", message);

    if (title)
      console.log("TITLE", title);
  }

  warning(message: string, title?: string) {
    console.log("WARNING", message);

    if (title)
      console.log("TITLE", title);
  }

  error(message: string, title?: string) {
    console.log("ERROR", message);

    if (title)
      console.log("TITLE", title);
  }

  info(message: string, title?: string) {
    console.log("INFO", message);

    if (title)
      console.log("TITLE", title);
  }
}