import { Component, OnInit } from '@angular/core';
declare var Morris: any;

@Component({
    selector: 'donut-chart',
    templateUrl: './donut-chart.component.html'
})

// TODO: Use ng-morris-js at https://www.npmjs.com/package/ng-morris-js
export class DonutChartComponent implements OnInit {

    // TODO: Fetch datat from the server or pass as an input
    data: {
      label: string;
      value: number;
    }[];


    ngOnInit() {
      this.data = [
        {
          label: "Download Sales",
          value: 30
        }, {
          label: "In-Store Sales",
          value: 30
        }, {
          label: "Mail-Order Sales",
          value: 30
        }
      ];

      Morris.Donut({
        element: 'morris-donut-chart',
        data: this.data,
        resize: true
      });
    }
}