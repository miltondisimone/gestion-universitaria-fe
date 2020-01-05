export class User {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public userType: string,
    public id?: string,
    public img?: string
    ) { }

}
