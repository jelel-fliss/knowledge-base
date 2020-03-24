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

  userID: number;
  problemID: number;
  content: string;

  constructor(userID: number, problemID: number, content: string  ) {
    this.userID = userID;
    this.problemID = problemID;
    this.content = content;
  }
}

