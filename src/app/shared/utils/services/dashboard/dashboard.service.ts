import { Injectable } from '@angular/core';
import { SenzorsTypes } from '../../interfaces/.interfaces';
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  _dashBoardValue: BehaviorSubject<SenzorsTypes[] | any>

  constructor() { 
    this._dashBoardValue = new BehaviorSubject(null)
  }

  get getDashBoard$() : Observable<SenzorsTypes[]>{
      return this._dashBoardValue.asObservable()
  }

  getDashBoard(): Observable<SenzorsTypes[]>{
    return of(<SenzorsTypes[]>[
      {
        id: 2,
        name:"Pression",
        parameter: 2
      }
    ])
  }
}
