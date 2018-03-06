import { Component, OnInit } from '@angular/core';
declare var Morris: any;

@Component({
    selector: 'bar-chart',
    templateUrl: './bar-chart.component.html'
})
export class BarChartComponent implements OnInit {

    table: {
      number: number;
      date: string;
      time: string;
      amount: number;
    }[];

    data: {
      y: string;
      a: number;
      b: number;
    }[];

    ngOnInit() {
      this.data = [{
        y: '2006',
        a: 100,
        b: 90
      }, {
        y: '2007',
        a: 75,
        b: 65
      }, {
        y: '2008',
        a: 50,
        b: 40
      }, {
        y: '2009',
        a: 75,
        b: 65
      }, {
        y: '2010',
        a: 50,
        b: 40
      }, {
        y: '2011',
        a: 75,
        b: 65
      }, {
        y: '2012',
        a: 100,
        b: 90
      }];

      Morris.Bar({
        element: 'morris-bar-chart',
        data: this.data,
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
      });


      this.table = [
        {
          number: 3326,
          date: '10/21/2013',
          time: '3:29 PM',
          amount: 321.33
        },

        {
          number: 3325,
          date: '10/21/2013',
          time: '3:29 PM',
          amount: 321.33
        },

        {
          number: 3324,
          date: '10/21/2013',
          time: '3:29 PM',
          amount: 321.33
        },

        {
          number: 3323,
          date: '10/21/2013',
          time: '3:29 PM',
          amount: 321.33
        },
        {
          number: 3322,
          date: '10/21/2013',
          time: '3:29 PM',
          amount: 321.33
        },
        {
          number: 3321,
          date: '10/21/2013',
          time: '3:29 PM',
          amount: 321.33
        },
        {
          number: 3320,
          date: '10/21/2013',
          time: '3:29 PM',
          amount: 321.33
        }
      ];
    }
}
