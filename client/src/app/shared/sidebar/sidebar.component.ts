import { Component, OnInit, HostListener, Output } from '@angular/core';
import { Responsivepage } from './../../shared/responsivepage';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent extends Responsivepage implements OnInit {

  innerWidth: any;
  state: string;
  userPictureID: number;

  constructor() {
    super();
  }

  hideSidebar() {
    if (this.state === 'Hide') {
      const sidebar = document.getElementById('sidebar');
      sidebar.style.transform = 'translateX(-250px)';
    }
  }

  showSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.transform = 'translateX(0px)';
  }



  @HostListener('window:resize', ['$event'])onResize(event) {
    this.ResizeSidebar();
  }

  ngOnInit() {
    this.ResizeSidebar();
    const user = JSON.parse(localStorage.getItem('userData'));
    this.userPictureID = user.ID;
    console.log(user.ID);
  }

  ResizeSidebar() {
    const hidebtn = document.getElementById('hide-sidebar-btn') as HTMLButtonElement;
    this.GetState();
    if (this.state === 'Hide') {
      this.hideSidebar();
      hidebtn.disabled = false ;
      hidebtn.style.display = 'block';
    } else {
      this.showSidebar();
      hidebtn.disabled = true ;
      hidebtn.style.display = 'none';
    }
  }

  DisableButton(btn: HTMLButtonElement){
    btn.disabled = true ;
    btn.style.display = 'none';
  }

  ActivateButton(btn: HTMLButtonElement){
    btn.disabled = false ;
    btn.style.display = 'block';
  }





}
