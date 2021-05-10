import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'mat-card-shared',
  templateUrl: './mat-card-shared.component.html',
  styleUrls: ['./mat-card-shared.component.scss'],
})
export class MatCardSharedComponent implements OnInit {
  @Input() title: string;

  constructor() {
    this.title = ' sami';
  }
  ngOnInit(): void {

  }
}
