import { Component, OnInit } from '@angular/core';
import { IReponseInfo } from 'src/app/shared/utils/interfaces/.interfaces';
import { AuthServicesService } from 'src/app/shared/utils/services/.services';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  registerData = {} as IReponseInfo

  constructor(private _apiServices : AuthServicesService) { }

  ngOnInit(): void {
  }

  post(){
    this._apiServices.postMessages({msg: this.registerData.description})
  }

}
