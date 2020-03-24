import { Component, OnInit } from '@angular/core';
import { Responsivepage } from '../../shared/responsivepage';

@Component({
  selector: 'app-settingspage',
  templateUrl: './settingspage.component.html',
  styleUrls: ['./settingspage.component.scss']
})
export class SettingspageComponent extends Responsivepage implements OnInit {

  constructor() {
    super();
   }

}
