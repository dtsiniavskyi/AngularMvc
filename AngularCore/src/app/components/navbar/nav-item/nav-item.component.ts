import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: '[app-nav-item]',
  templateUrl: './nav-item.component.html',
  host: {
    'class':'nav-item',
    'data-toggle':'tooltip',
    'data-placement':'right'
  }
})
export class NavItemComponent implements OnInit {

  @Input() text:string = '';
  @Input() link:string[] = [];
  @Input() icon:string = '';

  @HostBinding('title') title: string = '';

  constructor() { }

  ngOnInit() {
    this.title = this.text;
    console.log(this.text, this.link, this.icon);
  }

}
