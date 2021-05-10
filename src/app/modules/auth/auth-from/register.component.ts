import { Component, OnInit } from '@angular/core';
import { IAuthInfo } from 'src/app/shared/utils/interfaces/.interfaces';
import { AuthTokenService } from 'src/app/shared/utils/services/.services';

@Component({
  selector: 'register-from',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterFromComponent implements OnInit {
  registerData: IAuthInfo;
  constructor(private _authServices: AuthTokenService) {
    this.registerData = Object.create({});
  }

  ngOnInit(): void {}

  post() {
    this._authServices.registerUser(this.registerData)
  }
}
