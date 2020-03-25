import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError} from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { User } from '../entities/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  // private currentUserSubject: BehaviorSubject<User>;
  // public currentUser: Observable<User>;
  serverURL = 'http://localhost:8001/';

  currentUser = new BehaviorSubject<User>(null);

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    })
  };

  private tokenExpirationTimer: any;

  constructor(private http: HttpClient) {}

  private handleAuthentication(userData: User) {
    const expirationTime = new Date(new Date().getTime() + 1000 * 60 * 20); // 20 minutes is the token's life
    const tokenLife = ((expirationTime.getTime()) - (new Date().getTime())) ;

    const user = new User(
      userData.ID,
      userData.Name,
      userData.Prename,
      userData.Email,
      userData.Birthday,
      userData.BirthPlace,
      userData.Position,
      userData.token,
      expirationTime);
    this.currentUser.next(user);
    // After emitting user
    this.autoLogOut(tokenLife);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  autoLogin() {
    const userData: {
      ID: string;
      Name: string;
      Prename: string;
      Email: string;
      Birthday: string;
      BirthPlace: string;
      Position: string;
      _token: string;
      _expiresIn: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.ID,
      userData.Name,
      userData.Prename,
      userData.Email,
      userData.BirthPlace,
      userData.BirthPlace,
      userData.Position,
      userData._token,
      new Date(userData._expiresIn)
    );
    if (loadedUser.token) {
      this.currentUser.next(loadedUser);
      const expirationDuration = new Date(userData._expiresIn).getTime() - new Date().getTime();
      this.autoLogOut(expirationDuration);
    }

    // console.log('Autologin Worked');
    // console.log(userData);

  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(this.serverURL + 'auth', { email, password }, this.httpOptions)
      .pipe(catchError(this.handleError)
        , tap(userData => {
          this.handleAuthentication(userData);

        }));
  }

  private handleError(errRes: HttpErrorResponse) {
    let errorMSG: string;
    if (!errRes.error || !errRes.error.error) {
      errorMSG = 'An unknown error occured.';
      return throwError(errorMSG);
    } else {
      errorMSG = 'User does not exist or password is incorrect. Check if the email and passwords are correct and retry please.';
      return throwError(errorMSG);
    }

  }


  logout() {
    this.currentUser.next(null);
    console.log('logged out.');
    // remove user data from local storage for log out
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
  }

  autoLogOut(time: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      console.log('auto-logged out !');
      this.logout();
    }, time);
  }


}
