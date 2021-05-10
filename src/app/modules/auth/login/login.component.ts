import { Component, OnInit } from '@angular/core';
import { IAuthInfo } from 'src/app/shared/utils/interfaces/.interfaces';
import { AuthTokenService } from 'src/app/shared/utils/services/auth/auth-token.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginData: IAuthInfo;
  constructor(private _authServices: AuthTokenService) {
    this.loginData = Object.create({});
  }

  ngOnInit(): void {}

  post() {
    this._authServices.loginUser(this.loginData);
  }
}
