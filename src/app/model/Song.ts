import {Category} from './Category';

export class Song {
  private nameSong: string;
  private lyrics: string;
  private avatarSong: string;
  private mp3Url: string;
  private category: Category;

  constructor(nameSong: string, lyrics: string, avatarSong: string, mp3Url: string, category: Category) {
    this.nameSong = nameSong;
    this.lyrics = lyrics;
    this.avatarSong = avatarSong;
    this.mp3Url = mp3Url;
    this.category = category;
  }
}
