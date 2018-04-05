import { AlertTypes } from "./enums/AlertTypes";

export class Alert {
    constructor(public message: string, public title?: string, public type?: AlertTypes) {
        
    }
}