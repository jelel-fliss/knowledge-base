export interface Comment {
  ID: number;
  Content: string;
  PostTime: Date;
  Poster_ID: number;
  Problem_ID: number;
  Name: string;
  Prename: string;
  is_Solution: number;
}

export class CommentModal {

  username: string;
  userprenme: string;
  userID: number;
  problemID: number;
  content: string;

  constructor(username: string, userprename: string, userID: number, problemID: number, content: string  ) {
    this.username = username;
    this.userprenme = userprename;
    this.userID = userID;
    this.problemID = problemID;
    this.content = content;
  }
}

