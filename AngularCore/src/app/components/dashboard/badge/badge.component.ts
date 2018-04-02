import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: '[app-badge]',
    templateUrl: './badge.component.html'
})

export class BadgeComponent implements OnInit {
    @Input() count: number = 0;
    @Input() icon: string = 'comments';
    @Input() caption: string = '';
    @Input() color: string = '';

    constructor() { }

    ngOnInit() { }
}