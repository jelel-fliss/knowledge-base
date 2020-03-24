import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Problem, ProblemModal } from '../entities/problem';
import { Comment, CommentModal } from '../entities/comment';
import { Count } from '../entities/count';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serverURL = 'http://localhost:8000/';

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    })
  };
  // GET METHODES

  getProblemsPaginated(offset: number): Observable<Problem[]> {
      return this.http.get<Problem[]>(
        this.serverURL + 'problems/pagination/' + offset ,
        this.httpOptions);
  }


  CountProblems(): Observable<Count[]> {
    return this.http.get<Count[]>(this.serverURL + 'problems/number', this.httpOptions);
  }

  getAllProblems(): Observable<Problem[]> {
    return this.http.get<Problem[]>(this.serverURL + 'problems', this.httpOptions);
  }

  getProblemByID(ID: number): Observable<Problem[]> {
    return this.http.get<Problem[]>(this.serverURL + 'problem/' + ID, this.httpOptions);
  }

  getProblemByName(name: string): Observable<Problem[]> {
    return this.http.get<Problem[]>(this.serverURL + 'problem/name/' + name, this.httpOptions);

  }

  getCommentsOfProblem(problemID: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.serverURL + 'problemcomments/' + problemID, this.httpOptions);
  }

  getCommentsOfProblems(problemIDs: number[]): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.serverURL + 'comments?array=[' + problemIDs + ']', this.httpOptions);
  }

  // POST METHODES

  postComment(userID: number, problemID: number, content: string): Observable<any> {
    return this.http.post<CommentModal>(this.serverURL + 'commentOnProblem', { userID, problemID, content } , this.httpOptions);
  }

  postProblem(userID: number, name: string, subject: string, content: string): Observable<any> {
    return this.http.post<ProblemModal>(this.serverURL + 'postProblem', { userID, name, subject, content}, this.httpOptions);
  }

  markSolution(problemID: number, commentID: number): Observable<any> {
    return this.http.put<any>(this.serverURL + 'markSolution/' + problemID + '/' + commentID, this.httpOptions);
  }

  Follow(userID: number, problemID: number): Observable<any>{
    return this.http.put<any>(this.serverURL + 'follow/' + userID + '/' + problemID, this.httpOptions );
  }

  Unfollow(userID: number, problemID: number): Observable<any>{
    return this.http.delete<any>(this.serverURL + 'unfollow/' + userID + '/' + problemID, this.httpOptions );
  }

  CheckIsFollowed(userID: number, problemID: number): Observable<any[]> {
    return this.http.get<any[]>(this.serverURL + 'checkifFollowed/' + userID + '/' + problemID, this.httpOptions);
  }


}
