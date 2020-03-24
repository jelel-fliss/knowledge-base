import { Component, OnInit } from '@angular/core';
import { Responsivepage } from 'src/app/shared/responsivepage';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent extends Responsivepage implements OnInit {

  id: number;

  constructor(public route: ActivatedRoute, public api: ApiService) {
    super();
    this.route.paramMap.subscribe(params => {
      // tslint:disable-next-line: radix
      this.id = parseInt(params.get('userID'));
    });
   }

  ngOnInit(): void {
  }

}
