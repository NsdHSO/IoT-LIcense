import { Component, OnInit } from '@angular/core';
import { AuthServicesService } from './shared/utils/services/.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public _serivice: AuthServicesService) {}
  title = 'frontEnd';
}
