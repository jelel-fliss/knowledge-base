import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { take, exhaustMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JWTInterceptorService implements HttpInterceptor {

  constructor(private autService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    return this.autService.currentUser.pipe(take(1),
    exhaustMap(user => {
      if (!user) {
        return next.handle(request);
      }
      const modifiedReq = request.clone({params: new HttpParams().set('auth', user.token)});
      return next.handle(modifiedReq);
    }));
  }
}
