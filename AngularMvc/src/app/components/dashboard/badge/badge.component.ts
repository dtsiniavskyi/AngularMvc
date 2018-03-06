import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'badge',
    templateUrl: './badge.component.html'
})

export class BadgeComponent implements OnInit {
    @Input() count: number = 0;
    @Input() icon: string = 'fa-comments';
    @Input() caption: string = '';
    @Input() color: string = '';

    constructor() {
    }

    ngOnInit() {
        console.log(this.icon);
    }
}