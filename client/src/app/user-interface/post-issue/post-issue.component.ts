import { Component, OnInit } from '@angular/core';
import { Responsivepage } from '../../shared/responsivepage';
import { ApiService } from 'src/app/services/api.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-issue',
  templateUrl: './post-issue.component.html',
  styleUrls: ['./post-issue.component.scss']
})
export class PostIssueComponent extends Responsivepage implements OnInit {

  constructor(private api: ApiService, private router: Router) {
    super();
   }

   PostProblem(form: NgForm) {
    if (form.valid) {
      const userData = JSON.parse(localStorage.getItem('userData'));
      return this.api.postProblem(userData.ID, form.value.Name, form.value.Subject, form.value.content ).subscribe(
        data => {
          this.router.navigate(['/dashboard/Avaxipedia']);
        }
      );
    }
   }


}
