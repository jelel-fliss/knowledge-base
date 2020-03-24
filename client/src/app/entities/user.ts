export class User {

  constructor(
    public ID: string,
    public Name: string,
    public Prename: string,
    public Email: string,
    public Birthday: string,
    public BirthPlace: string,
    public Position: string,
    private _token: string,
    private _expiresIn: Date
  ) { }

  get token() {
    if ( !this._expiresIn || new Date() > this._expiresIn) {
      return null;
    }
    return this._token;
  }
}
