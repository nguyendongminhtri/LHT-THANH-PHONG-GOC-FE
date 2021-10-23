import { Component, OnInit } from '@angular/core';
import {SingerServiceService} from '../../../service/singer-service/singer-service.service';
import {Singer} from '../../../model/Singer';

@Component({
  selector: 'app-create-singer',
  templateUrl: './create-singer.component.html',
  styleUrls: ['./create-singer.component.scss']
})
export class CreateSingerComponent implements OnInit {
form: any = {};
status = 'Please fill in the form to create Singer';
singer: Singer;
error1: any = {
  message: "no_avatar_singer"
}
  error2: any = {
    message: "no_birthday_singer"
  }
  success: any = {
    message: "create_success"
  }
  constructor(private singerService: SingerServiceService) { }

  ngOnInit(): void {
  }

  onUploadAvatar($event: string) {
    this.form.avatarSinger = $event;
  }

  ngSubmit() {
   this.singer = new Singer(
     this.form.nameSinger,
     this.form.avatarSinger,
     this.form.description,
     this.form.birthDay
   )
    console.log('this.singer --> ', this.singer);
    this.singerService.createSinger(this.singer).subscribe(data =>{
      console.log('data -> ', data);
      if(JSON.stringify(data)==JSON.stringify(this.error1)){
        this.status = 'Please upload avatar!'
      }
      if(JSON.stringify(data)==JSON.stringify(this.error2)){
        this.status = 'Please select birthday!'
      }
      if(JSON.stringify(data)==JSON.stringify(this.success)){
        this.status = 'Create Success!'
      }
    })
  }
}
