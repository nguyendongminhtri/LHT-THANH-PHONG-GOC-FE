export class Singer {
  nameSinger: string;
  avatarSinger: string;
  description: string;
  birthDay: any;

  constructor(nameSinger: string, avatarSinger: string, description: string, birthDay: any) {
    this.nameSinger = nameSinger;
    this.avatarSinger = avatarSinger;
    this.description = description;
    this.birthDay = birthDay;
  }
}
