import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/entities/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: string = null;
  isLoading = false;

  constructor(private authAPI: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.isLoading = true;
    const email = form.value.email;
    const password = form.value.password;

    if (!form.valid) { return; }
    let authObj: Observable<User>;
    authObj = this.authAPI.login(email, password);
    authObj.subscribe(
      data => {
        this.isLoading = false;
        this.error = null;
        this.router.navigate(['/dashboard']);
      }, errorMSG => {
        this.isLoading = false;
        this.error = errorMSG;
        console.log(errorMSG);
      }
    );
    form.reset();
  }

}
