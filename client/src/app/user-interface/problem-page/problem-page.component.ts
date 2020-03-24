import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Problem } from './../../entities/problem';
import { Comment, CommentModal } from './../../entities/comment';
import { ApiService } from 'src/app/services/api.service';
import { Responsivepage } from 'src/app/shared/responsivepage';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-problem-page',
  templateUrl: './problem-page.component.html',
  styleUrls: ['./problem-page.component.scss']
})


export class ProblemPageComponent extends Responsivepage implements OnInit, AfterViewChecked {

  problem: Problem[];
  comments: Comment[];
  id: number;
  PosterID: number;
  Following = false;
  FollowingSubject = new BehaviorSubject<boolean>(this.Following);

  constructor(public route: ActivatedRoute, public api: ApiService) {
    super();
    this.problem = [];
    this.comments = [];
    this.route.paramMap.subscribe(params => {
      // tslint:disable-next-line: radix
      this.id = parseInt(params.get('problemID'));
    });
    this.GetProblembyID(this.id);
    this.GetCommentsOfProblem(this.id);


  }

  UserID(): number {
    const currentUser = JSON.parse(localStorage.getItem('userData'));
    return currentUser.ID;
  }

  ngOnInit(): void {
    this.ResizeBoxes();
    this.isFollowing();
  }

  IsItFollowing() {
    console.log(this.Following);
  }

  isFollowing() {
    return this.api.CheckIsFollowed(this.UserID(), this.id).subscribe(data => {
      console.log(data.length);
      if (data.length === 0) {
        this.Following = false;
        this.FollowingSubject.next(false);
        console.log('Following should be false');
      } else {
        this.Following = true;
        this.FollowingSubject.next(true);
        console.log('Following should be true');
      }
    });
  }

  FollowUnfollow() {
    if (!this.Following) {

      this.Following = !this.Following;
      return this.api.Follow(this.UserID(), this.id).subscribe();
    } else {

      this.Following = !this.Following;
      return this.api.Unfollow(this.UserID(), this.id).subscribe();
    }
  }


  ResizeBoxes() {
    const boxes = document.getElementsByClassName('box');
    const avatars = document.getElementsByClassName('avatar-poster');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < boxes.length; i++) {
      const tmp = boxes.item(i) as HTMLElement;
      tmp.style.width = this.state === 'Hide' ? '100%' : '80%';
    }
    for (let i = 0; i < avatars.length; i++) {
      const tmp = avatars.item(i) as HTMLElement;
      tmp.style.width = this.state === 'Hide' ? '20px' : '100px';
    }
  }

  StoreProblem(prb: Problem) {
    this.problem.push(prb);
    this.PosterID = prb.Poster_ID;
  }

  StoreComment(comment) {
    this.comments.push(comment);
  }

  EmptyComments() {
    this.comments = [];
  }

  GetProblembyID(problemID: number) {
    return this.api.getProblemByID(problemID).subscribe((data => {
      data.forEach(prb => {
        this.StoreProblem(prb);
      });
    }));
  }

  GetCommentsOfProblem(problemID: number) {
    this.EmptyComments();
    return this.api.getCommentsOfProblem(problemID).subscribe((data => {
      data.forEach(cmt => {
        this.StoreComment(cmt);
      });
    }));
  }

  PostComment(form: NgForm) {
    if (form.valid) {
      const userData = JSON.parse(localStorage.getItem('userData'));
      const CommentToUpload = new CommentModal(userData.ID, this.id, form.value.content);
      return this.api.postComment(CommentToUpload.userID, CommentToUpload.problemID, CommentToUpload.content).subscribe(
        data => {
          window.location.reload();
        }, error => {
          console.log(error);
        }
      );
    }
  }

  MarkSolution(problemID: number, commentID: number) {
    return this.api.markSolution(problemID, commentID).subscribe(
      data => {
        window.location.reload();
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }
}




