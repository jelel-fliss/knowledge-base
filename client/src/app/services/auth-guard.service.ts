import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  UrlTree | boolean |
  Observable<boolean|UrlTree> |
  Promise<boolean|UrlTree> {
    return this.authenticationService.currentUser.pipe(take(1),
    map(
      user => {
        const isAuthenticated = !!user;
        if ( isAuthenticated ){
          return true;
        }
        return this.router.createUrlTree(['/login']);
      }
    ));
  }
}
