import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Responsivepage } from '../../shared/responsivepage';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent extends Responsivepage implements OnInit, AfterViewInit {

  state: string;
  constructor() {
    super();

  }

  ngOnInit() {
    this.ResizePage();
  }

  ngAfterViewInit() {}





}
