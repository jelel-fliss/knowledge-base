export interface Problem {
  ID: number;
  Name: string;
  Description: string;
  PostTime: Date;
  Subject: string;
  Poster_ID: number;
  State: number;
  Age: string;
  Views: number;
}

export class ProblemModal {
  constructor(
    public userID: string,
    public name: string,
    public subject: string,
    public content: string
  ) {}
}
