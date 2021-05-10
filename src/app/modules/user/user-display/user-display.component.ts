import { Component, Input, OnInit } from '@angular/core';
import { IReponseInfo } from 'src/app/shared/utils/interfaces/.interfaces';
import { AuthServicesService } from 'src/app/shared/utils/services/.services';

@Component({
  selector: 'user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.scss'],
})
export class UserDisplayComponent implements OnInit {
  @Input() message?: any;
  users = Array<IReponseInfo>();

  constructor(public _apiServices: AuthServicesService) {}

  ngOnInit(): void {
    this._apiServices.getUsers();
    this.users = this._apiServices.users;
  }
}
