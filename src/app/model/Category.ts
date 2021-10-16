export class Category {
  public id: number;
  public nameCategory: string;
  public avatarCategory: string;
  constructor(nameCategory: string, avatarCategory: string) {
    this.nameCategory = nameCategory;
    this.avatarCategory = avatarCategory;
  }
}
