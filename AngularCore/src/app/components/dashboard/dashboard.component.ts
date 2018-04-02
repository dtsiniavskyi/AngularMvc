import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    // TODO: create separate inerface or model type
    badges: {
        count: number,
        icon: string,
        caption: string,
        color: string
    }[] = []

    ngOnInit() {
        this.badges.push({ count: 100, icon: 'comments', caption: 'New Comments!', color: 'primary' });
        this.badges.push({ count: 100, icon: 'tasks', caption: 'New Tasks!', color: 'success' });
        this.badges.push({ count: 100, icon: 'shopping-cart', caption: 'New Orders!', color: 'warning' });
        this.badges.push({ count: 100, icon: 'support', caption: 'Support Tickets!', color: 'danger' });
    }
}
