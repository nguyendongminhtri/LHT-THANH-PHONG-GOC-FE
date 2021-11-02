import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {SignUpForm} from "../model/SignUpForm";
import {Observable} from "rxjs";
import {JwtResponse} from "../model/JwtResponse";
import {SignInForm} from "../model/SignInForm";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//API_LOCAL
//   private API_SIGNUP = environment.API_LOCAL+'signup';
  // private API_SIGNIN = environment.API_LOCAL+'signin';
  // private API_CHANGE_PASSWORD = environment.API_LOCAL + 'change-password';
  // private API_CHANGE_AVATAR = environment.API_LOCAL + 'change-avatar';
  // private API_CHANGE_PROFILE = environment.API_LOCAL+'change-profile';
  //API SERVER
  private API_SIGNIN = environment.API_SERVER+'signin';
  private API_SIGNUP = environment.API_SERVER+'signup';
  private API_CHANGE_PASSWORD = environment.API_SERVER+'change-password';
  private API_CHANGE_AVATAR = environment.API_SERVER+'change-avatar';
  private API_CHANGE_PROFILE = environment.API_SERVER+'change-profile';
  constructor(private http: HttpClient) { }
  signUp (signUp: SignUpForm): Observable<any>{
    return this.http.post<any>(this.API_SIGNUP, signUp);
  }
  signIn (signIn: SignInForm): Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.API_SIGNIN, signIn);
  }
  changePassword(info: any): Observable<JwtResponse>{
      return this.http.put<JwtResponse>(this.API_CHANGE_PASSWORD, info);
  }
  changeAvatar(info: any):Observable<JwtResponse>{
    return this.http.put<JwtResponse>(this.API_CHANGE_AVATAR, info);
  }
  changeProfile(info: any):Observable<JwtResponse>{
    return this.http.put<JwtResponse>(this.API_CHANGE_PROFILE, info);
  }

 public data: boolean;
  setData(data: boolean){
    this.data = data;
  }
  getData(){
    return this.data;
  }
}
