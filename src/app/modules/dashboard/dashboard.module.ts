import { NgModule } from '@angular/core';
import { DashboardSenzorComponent } from './dashboard-senzor/dashboard-senzor.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [DashboardSenzorComponent],
  imports: [ SharedModule, BrowserModule],
  exports: [DashboardSenzorComponent],
})
export class DashboardModule {}
