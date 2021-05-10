import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthTokenService } from './.auth';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector){}

  intercept(req: any, next: any) {
    var auth = this.injector.get(AuthTokenService)
    var authRequest = req.clone({
      headers: req.headers.set("Authorization", "token " + auth.token)
    }) 
    return next.handle(authRequest);
  }
}
