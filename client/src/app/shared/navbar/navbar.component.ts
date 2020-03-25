import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Responsivepage } from './../../shared/responsivepage';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent extends Responsivepage implements OnInit {

  closeResult = '';
  SignalSubject: Subject<boolean> = new Subject<boolean>();

  constructor(private router: Router, private authService: AuthenticationService) {
    super();
   }

   emitEvent_to_Notifications() {
     this.SignalSubject.next(true);
   }

   NavbarColorTheme(navbar: HTMLElement, color: string){
    navbar.style.backgroundColor = color;
  }

   ResizeNavbar() {
    this.GetState();
    // page is navbar
    const page = document.getElementById('Navbar');
    const togglebtn = document.getElementById('toggle-btn');
    if (this.state === 'Hide') {
      page.style.left = '0px';
      page.classList.remove('shadow-lg');
      this.NavbarColorTheme(page, 'white');
      // Adding toggle button
      togglebtn.style.display = 'block' ;

    } else {
      page.style.left = '250px';
      togglebtn.style.display = 'none';
      this.NavbarColorTheme(page, '#f4f4f4');
      page.classList.add('shadow-lg');
    }

  }


   @HostListener('window:resize', ['$event'])onResize(event) {
    this.ResizeNavbar();
  }

  ngOnInit() {
    this.ResizeNavbar();

  }

  SlideSidebar() {
    // Telling the sidebar component to Execute the showsidebar function !
    const sidebarcomponent = document.getElementsByTagName('app-sidebar')[0].childNodes.item(0)  as HTMLElement;
    sidebarcomponent.style.zIndex = '5';
    sidebarcomponent.style.transform = 'translateX(0px)';

  }

  LogOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }




}
