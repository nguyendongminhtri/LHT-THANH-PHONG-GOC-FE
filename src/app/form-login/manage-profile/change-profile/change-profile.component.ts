import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AuthService} from '../../../service/auth.service';
import {ChangeProfile} from '../../../model/ChangeProfile';
import {TokenService} from '../../../service/token.service';

@Component({
  selector: 'app-change-profile',
  templateUrl: './change-profile.component.html',
  styleUrls: ['./change-profile.component.scss']
})
export class ChangeProfileComponent implements OnInit {
  emailFormControl = new FormControl('',[
    Validators.required,
    Validators.email
  ])
  form: any = {};
  changeProfile: ChangeProfile;
  status = 'Please fill in the form to change your Profile!';
  error1: any = {
    message: "nouser"
  }
  error2: any = {
    message: "noemail"
  }
  success: any = {
    message: "yes"
  }
  constructor(private authService: AuthService,
              private tokenService: TokenService) { }

  ngOnInit(): void {
  }
  ngSubmit(){
    this.changeProfile = new ChangeProfile(
      this.form.name,
      this.form.username,
      this.form.email
    )
    this.authService.changeProfile(this.changeProfile).subscribe(data =>{
      if(JSON.stringify(data)==JSON.stringify(this.error1)){
        this.status = 'The username is existed! Please try again!'
      }
      if(JSON.stringify(data)==JSON.stringify(this.error2)){
        this.status = 'The email is existed! Please try again!'
      }
      if(JSON.stringify(data)==JSON.stringify(this.success)){
        console.log('goi success');
        this.status = 'Change Profile success!';
        this.tokenService.setName(this.form.name);
        alert('Change profile success! Please login with new username and password')
        this.tokenService.logOut();
      }
    })
  }
}
