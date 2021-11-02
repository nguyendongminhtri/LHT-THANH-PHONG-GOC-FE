import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';
import {Song} from '../../model/Song';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {
//API LOCAL
//   private API_SONG = environment.API_LOCAL + 'song';
  //API SEVER
  private API_SONG = environment.API_SERVER + 'song';
  constructor(private http: HttpClient) { }
  createSong(song: Song): Observable<Song>{
    return this.http.post<Song>(this.API_SONG, song);
  }
  pageSong(request){
    const params = request;
    return this.http.get(this.API_SONG, {params})
  }
}
