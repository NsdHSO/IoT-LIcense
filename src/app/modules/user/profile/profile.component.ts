import { Component, OnInit } from '@angular/core';
import { IReponseInfo } from 'src/app/shared/utils/interfaces/.interfaces';
import { AuthServicesService } from 'src/app/shared/utils/services/.services';
import { ActivatedRoute } from '@angular/router';
import routes from 'src/app/app.routing';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user : IReponseInfo | null | any

  constructor(
    public _apiServices: AuthServicesService,
    private router: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    let id = this.router.snapshot.params.id
    this._apiServices.getUser(id).subscribe(resp => this.user =  resp)

  }
}
