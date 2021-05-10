import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'shared-graph',
  templateUrl: './shared-graph.component.html',
  styleUrls: ['./shared-graph.component.scss'],
})
export class SharedGraphComponent implements OnInit {
  chartOptions = {};
  Highcharts = Highcharts;
  
  constructor() {}
  
  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        height: 300,
        type: 'areaspline',
        width: 417,
      },
      title: {
        text: 'Water',
      },
      legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 150,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
      },
      xAxis: {
        categories: [
          '07 : 00',
          '09 : 00',
          '12 : 00',
          '14 : 00',
          '16 : 00',
          '18 : 00',
          '22 : 00H',
        ],
        plotBands: [
          {
            // visualize the weekend
            from: 4.5,
            to: 6.5,
            color: 'rgba(68, 170, 213, .2)',
          },
        ],
      },
      yAxis: {
        title: {
          text: 'Soil Moisture',
        },
      },
      tooltip: {
        shared: true,
        valueSuffix: ' Moisture',
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        areaspline: {
          fillOpacity: 0.5,
        },
      },
      series: [
        {
          name: 'Today',
          data: [3, 4, 3, 5, 4, 10, 12],
        },
        {
          name: 'Yesterday',
          data: [1, 3, 4, 3, 3, 5, 4],
        },
      ],
    };
  }
}
