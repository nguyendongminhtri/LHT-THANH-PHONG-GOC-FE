export class ChangeProfile {
  name: string
  username: string;
  email: string;
  constructor(name: string, username: string, email: string) {
    this.name = name;
    this.username = username;
    this.email = email;
  }
}
