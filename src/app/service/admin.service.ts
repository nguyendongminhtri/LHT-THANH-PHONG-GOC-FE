import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
//API LOCAL
  private API_PAGE_USER = environment.API_LOCAL+'user';
  constructor(private http: HttpClient) { }
  pageUser(request){
    const params = request;
    return this.http.get(this.API_PAGE_USER, {params})
  }
}
