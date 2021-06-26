import { Component, OnInit, HostListener, Renderer2} from '@angular/core';
import { ApiService } from './../../services/api.service';
import { Router } from '@angular/router';
import { Problem } from '../../entities/problem';
import { Responsivepage } from '../../shared/responsivepage';


@Component({
  selector: 'app-avaxipedia',
  templateUrl: './companypedia.component.html',
  styleUrls: ['./companypedia.component.scss']
})
export class CompanypediaComponent extends Responsivepage implements OnInit {

  url = 'http://localhost:8000';
  problems: Problem[]; // Problems that should appear for the user after typing their names or codes
  state: string;
  count: number;
  arraycount: any[];
  currentpage: number;

  constructor( public api: ApiService, public router: Router, private renderer: Renderer2) {
    super();
    this.CountProblems();
    this.GetProblemsPaginated(0);
  }

  ngOnInit() {
    super.ngOnInit();

    // this.SetActiveButton()
    // this.GetAllProblems();
  }

  CountProblems() {
    return this.api.CountProblems().subscribe( data => {
      this.count = data[0].count;
      // console.log('Number of pages :' + (Math.floor(this.count / 5) + 1));
      this.arraycount = Array((Math.floor(this.count / 5) + 1));
    });
  }

  GetProblemsPaginated(offset: number) {
    this.currentpage = offset + 1;
    this.EmptyProblems();
    return this.api.getProblemsPaginated(offset * 5).subscribe( data => {
      data.forEach( problem => {
        problem.Age = this.CleanTime(problem.PostTime);
        this.StoreProblem(problem);
      });
    });
  }

  navigateto(url: string) {
    this.router.navigate([url]);
  }

  EmptyProblems() {
    this.problems = []; // Empty previous problems while looking for another one
  }

  StoreProblem(problem: Problem) {
    this.problems.push(problem);
  }

  GetAllProblems() {
    this.EmptyProblems();
    return this.api.getAllProblems().subscribe((data => {
      data.forEach( problem => {
        problem.Age = this.CleanTime(problem.PostTime);
        this.StoreProblem(problem);
      });
    }));
  }

  GetProblemByID(event) {
    if (event !== '') {
      this.EmptyProblems();
      return this.api.getProblemByID(event).subscribe((data => {
        data.forEach( problem => {
          problem.Age = this.CleanTime(problem.PostTime);
          this.StoreProblem(problem);
        });
      }));
    }
  }

  CleanTime(time: any): string {
    const nowtime = (new Date()).getTime();
    const tmp = (new Date(time)).getTime();
    const seconds = Math.round((nowtime - tmp) / 1000 );
    if (seconds < 60) {
      return seconds.toString() + ' Seconds';
    }
    if (seconds >= 60 && seconds < 3600) {
      let s = String(Math.round(seconds / 60) ) + ' Minute'; // minutes
      s = (Math.round(seconds / 60 ) >= 2) ?  ( s + 's') : s ;
      return s;
    }
    if (seconds >= 3600 && seconds < 86400 ) {
      let s = String(Math.round(seconds / 3600 )) + ' Hour';
      s = (Math.round(seconds / 3600 ) >= 2) ?  ( s + 's') : s ; // hours
      return s;
    }
    if (seconds >= 86400 && seconds < 604800 ) {
      let s = String(Math.round(seconds / 3600 / 24)) + ' Day';
      s = (Math.round(seconds / 3600 / 24) >= 2 ) ? ( s + 's' ) : s;
      return s;
    }
    if (seconds >= 604800 && seconds < 2620779 ) {
      let s = String(Math.round(seconds / 3600 / 24 / 7 )) + ' Week';
      s = (Math.round((seconds / 3600 / 24 / 7 )) >= 2 ) ? ( s + 's') : s;
      return s; // Weeks
    }
    if ( seconds >= 2620779 && seconds < 31449600  ) {
      let s = 'Nearly ' + String(Math.round(seconds / 3600 / 24 / 7 / 4.333 )) + ' Month';
      s = ((Math.round(seconds / 3600 / 24 / 7 / 4.333 )) > 2) ? ( s + 's' ) : s;
      return s ; // Months
    }
    if ( seconds >= 31449600) {
      let s = String(Math.round(seconds / 3600 / 24 / 7 / 52 )) + ' Year';
      s = ((Math.round(seconds / 3600 / 24 / 7 / 52 ) >= 2 )) ? ( s + 's' ) : s;
      return s; // Years
    }
  }

  GetProblemByName(event) {
    if (event.includes(' ')) {
      this.EmptyProblems();
      return this.api.getProblemByName(event).subscribe((data => {
        data.forEach( problem => {
          problem.Age = this.CleanTime(problem.PostTime);
          this.StoreProblem(problem);
        });
      }));
    }
  }

  ResetPageButtons(){
    const btns = document.getElementsByClassName('page-link');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < btns.length; i++){
      const tmp = btns.item(i) as HTMLElement;
      tmp.classList.remove('active');
    }
  }

  SetPageButtonActive(elt: any) {
    this.ResetPageButtons();
    this.renderer.addClass( elt, 'active');
  }

  @HostListener('click', ['$event'])
  SetActiveButton(): void {
    this.ResetPageButtons();
    this.renderer.addClass( event.target, 'active');
  }

  }




