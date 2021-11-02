import {Category} from './Category';
import {Singer} from './Singer';
import {Band} from './Band';

export class Song {
  private nameSong: string;
  private lyrics: string;
  private avatarSong: string;
  private mp3Url: string;
  private category: Category;
  private singerList: Singer[] = [];
  private bandList: Band[] = [];


  constructor(nameSong: string, lyrics: string, avatarSong: string, mp3Url: string, category: Category, singerList: Singer[], bandList: Band[]) {
    this.nameSong = nameSong;
    this.lyrics = lyrics;
    this.avatarSong = avatarSong;
    this.mp3Url = mp3Url;
    this.category = category;
    this.singerList = singerList;
    this.bandList = bandList;
  }
}
