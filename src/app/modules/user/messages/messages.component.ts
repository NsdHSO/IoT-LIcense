import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMessageInfo } from 'src/app/shared/utils/interfaces/.interfaces';
import { AuthServicesService } from 'src/app/shared/utils/services/.services';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  dateIsOn = false;
  dataSource: IMessageInfo[] | null;

  constructor(
    private route: ActivatedRoute,
    private _apiService: AuthServicesService
  ) {
    
    this.dataSource = Array<IMessageInfo>();
  }

  ngOnInit(): void {
    this._apiService.getMessages$.subscribe((response) => {
      this.dataSource = response;
      this.dateIsOn = true;
    });

    let userid = this.route.snapshot.params.id;
    this._apiService.getMessages(userid);
  }
}
