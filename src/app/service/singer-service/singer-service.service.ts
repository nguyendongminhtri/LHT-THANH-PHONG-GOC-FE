import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Singer} from '../../model/Singer';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingerServiceService {
//API LOCAL
  private API_SINGER = environment.API_LOCAL + 'singer';
  constructor(private http: HttpClient) { }
  createSinger(singer: Singer): Observable<Singer>{
    return this.http.post<Singer>(this.API_SINGER, singer);
  }
  getListSinger(): Observable<Singer[]>{
    return this.http.get<Singer[]>(this.API_SINGER+'/list')
  }
}
