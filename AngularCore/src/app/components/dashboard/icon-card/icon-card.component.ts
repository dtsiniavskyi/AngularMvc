import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: '[app-icon-card]',
    templateUrl: './icon-card.component.html'
})

export class IconCardComponent implements OnInit {
    @Input() count: number = 0;
    @Input() icon: string = 'comments';
    @Input() caption: string = '';
    @Input() color: string = '';

    constructor() { }

    ngOnInit() { }
}