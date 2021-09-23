
export class UserAccount {
  id: number;
  name: string;
  username: string;
  email: string;
  avatar: string;
  roles: any;
  constructor(id: number, name: string, username: string, email: string, avatar: string, roles: any) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.roles = roles;
  }
}
