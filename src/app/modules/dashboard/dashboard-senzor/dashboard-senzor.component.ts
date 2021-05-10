import { Component, OnInit } from '@angular/core'
import { DashboardService } from 'src/app/shared/utils/services/.services';
import { SenzorsTypes } from './../../../shared/utils/interfaces/dashboard/senzors.types';

@Component({
  selector: 'dashboard-senzor',
  templateUrl: './dashboard-senzor.component.html',
  styleUrls: ['./dashboard-senzor.component.scss']
})
export class DashboardSenzorComponent implements OnInit {
  senzor!: Array<SenzorsTypes>

  constructor (private _dashboardService: DashboardService) {
  
  }

  ngOnInit (): void {
    this._dashboardService.getDashBoard().subscribe((res) => {
      this.senzor = res
    })

  }
}
