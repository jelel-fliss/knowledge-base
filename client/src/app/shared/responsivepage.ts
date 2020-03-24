import { HostListener, OnInit, AfterViewChecked } from '@angular/core';

export class Responsivepage implements OnInit, AfterViewChecked {

  state: string;
  innerWidth: any;

  ngOnInit() {}

  ngAfterViewChecked(): void {
    this.ResizePage();
  }

  GetState(): string {
    this.GetScreenWidth();
    if (this.innerWidth <= 850 ) {
      this.state = 'Hide';
    } else {
      this.state = 'Show';
    }
    return this.state;
  }



  GetScreenWidth() {
    this.innerWidth = window.innerWidth;
  }



  ResizePage() {
    this.GetState();
    const page = document.getElementsByClassName('page')[0] as HTMLElement;

    if (this.state === 'Hide') {
      page.style.paddingLeft = '22px';
      page.style.backgroundColor = 'white';
      page.style.backgroundImage = 'none';
      page.style.paddingTop = '48px';
      this.IssueBoxesMobile();

    } else {
      // Desktop
      page.style.paddingLeft = '300px';
      page.style.paddingTop = '60px';
      page.style.backgroundImage = 'url("whitebg.jpg")';
      this.IssueBoxesDesktop();
    }

  }

  IssueBoxesMobile() {
    const avatars = document.getElementsByClassName('avatar-issue');
    const statebuttons = document.getElementsByClassName('problem-state');

    for (let i = 0; i < avatars.length; i++) {
      const tmp = avatars.item(i) as HTMLElement;
      tmp.style.width = '50px';
      tmp.style.marginLeft = '10px';
      // tmp.style.marginTop = '10px';
    }

    for (let i = 0; i < statebuttons.length; i++) {
      const tmp = statebuttons.item(i) as HTMLElement;
      tmp.classList.remove('fa-3x');
      tmp.classList.add('fa-2x');
    }

  }

  IssueBoxesDesktop() {
    const avatars = document.getElementsByClassName('avatar-issue');
    const statebuttons = document.getElementsByClassName('problem-state');

    for (let i = 0; i < avatars.length; i++) {
      const tmp = avatars.item(i) as HTMLElement;
      tmp.style.width = '70px';
      tmp.style.marginLeft = '40px';
    }
    for (let i = 0; i < statebuttons.length; i++) {
      const tmp = statebuttons.item(i) as HTMLElement;
      tmp.classList.add('fa-3x');
    }

  }


  @HostListener('window:resize', ['$event'])onResize(event) {
    this.ResizePage();
  }


}
