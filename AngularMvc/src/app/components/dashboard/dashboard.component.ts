import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    badges: {
        count: number,
        icon: string,
        caption: string,
        color: string
    }[] = []

    ngOnInit() {
        this.badges.push({ count: 100, icon: 'fa-comments', caption: 'New Comments!', color: 'primary' });
        this.badges.push({ count: 100, icon: 'fa-tasks', caption: 'New Tasks!', color: 'green' });
        this.badges.push({ count: 100, icon: 'fa-shopping-cart', caption: 'New Orders!', color: 'yellow' });
        this.badges.push({ count: 100, icon: 'fa-support', caption: 'Support Tickets!', color: 'red' });
    }
}
