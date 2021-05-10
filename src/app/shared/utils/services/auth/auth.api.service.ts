import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMessageInfo, IReponseInfo, IAuthInfo } from '../../interfaces/.interfaces';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class AuthServicesService {
  public messages = Array<IMessageInfo>();
  users = Array<IReponseInfo>();
  path = environment.path;

  private _messageApi: BehaviorSubject<
  IMessageInfo[] | any
>;


  constructor(private http: HttpClient) {
    this._messageApi = new BehaviorSubject (null)
  }

 /**
     * Getter for driver
     */
  get getMessages$(): Observable<
  IMessageInfo[] | null
> {
  return this._messageApi.asObservable();
}
  
  sendUserRegistration(userData: IAuthInfo) {
    this.http.post(`${this.path}/register`, userData).subscribe((res) => {});
  }

  loginUser(loginData: IAuthInfo) {
    this.http.post(`${this.path}/login`, loginData).subscribe((res) => {});
  }

  getUsers() {
    this.http.get<any>(`${this.path}/users`).subscribe((res) => {
      this.users = res;
      console.log(
        this.users.map((res: IReponseInfo) => {
          res._id;
        })
      );
    });
  }

  getMessages(userId: Number) {
    return this.http.get<any>(`${this.path}/posts/${userId}`).subscribe((res) => {
      this.messages = res
      this._messageApi.next(res)
    });
  }

  postMessages(loginData: any) {
    this.http.post<any>(`${this.path}/post`, loginData).subscribe((res) => {});
  }

  getUser(id: number) {
    return this.http.get(`${this.path}/profile/` + id);
  }
}
