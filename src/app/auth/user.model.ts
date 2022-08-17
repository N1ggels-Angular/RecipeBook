export class User {
  constructor(
    public email: string, 
    public id: string, 
    private _token: string, 
    private _tokenExoirationDate: Date
  ) {}

  get token() {
    if (!this._tokenExoirationDate || new Date() > this._tokenExoirationDate) {
      return null;
    }
    return this._token;
  }
}