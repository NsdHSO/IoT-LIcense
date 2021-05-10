import { Component, OnInit } from '@angular/core';
import { AuthTokenService } from '../shared/utils/services/.services';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  auth = true
  constructor(private _authServicesService: AuthTokenService) { }

  ngOnInit(): void {
    this.auth = this._authServicesService.isAuthentication
  }

  logOut(){
    this._authServicesService.logOut();
  }
}
