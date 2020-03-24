import { Component, OnInit, HostListener } from '@angular/core';
import { Responsivepage } from './../../shared/responsivepage';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent extends Responsivepage implements OnInit {

  closeResult = '';

  constructor(private router: Router, private authService: AuthenticationService, private modalService: NgbModal) {
    super();

   }

   open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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
