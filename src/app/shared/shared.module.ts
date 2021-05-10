import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardSharedComponent } from './components/mat-card-shared/mat-card-shared.component';
import { MatCardModule } from '@angular/material/card';
import { HighchartsChartModule } from 'highcharts-angular';
import { SharedGraphComponent } from './components/shared-graph/shared-graph.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MatCardSharedComponent, SharedGraphComponent],
  imports: [
    CommonModule,
    MatCardModule,
    HttpClientModule,
    HighchartsChartModule,
    MatButtonModule,
  ],
  exports: [MatCardSharedComponent],
})
export class SharedModule {}
