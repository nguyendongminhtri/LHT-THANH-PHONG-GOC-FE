import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Category} from '../../../model/Category';
import {CategoryService} from '../../../service/category-service/category.service';
import {Song} from '../../../model/Song';
import {SongService} from '../../../service/song-service/song.service';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.scss']
})
export class CreateSongComponent implements OnInit {
  status = 'Please fill in the form to create Song!';
  form: any = {};
  categoryControl = new FormControl('', Validators.required);
  listCTGS: Category[] = [];
  checkAvatar = false;
  checkFileMp3 = false;
  song: Song;
  error1: any = {
    message: "no_avatar_song"
  }
  error2: any = {
    message: "no_mp3_song"
  }
  success: any = {
    message: "yes"
  }
  constructor(private categoryService: CategoryService,
              private songService: SongService) { }

  ngOnInit(): void {
    this.categoryService.getListCategory().subscribe(listCTG =>{
      this.listCTGS = listCTG;
      console.log('listCTG -> ', this.listCTGS);
    })
  }
  ngSubmit(){
    this.song = new Song(
      this.form.nameSong,
      this.form.lyrics,
      this.form.avatarSong,
      this.form.mp3Url,
      this.form.category,
    )
    console.log('song o tren --> ', this.song);
    this.songService.createSong(this.song).subscribe(data =>{
      console.log('data tra ve --> ', data);
      if(JSON.stringify(data)==JSON.stringify(this.error1)){
        this.status = 'Please upload Avatar!'
      }
      if(JSON.stringify(data)==JSON.stringify(this.error2)){
        this.status = 'Please upload File MP3!'
      }
      if(JSON.stringify(data)==JSON.stringify(this.success)){
        this.status = 'Create Song success!'
      }
    })
  }
  onChangeAvatar($event){
    this.checkAvatar = true;
    this.form.avatarSong = $event;
  }
  onMp3Url($event){
    this.checkFileMp3 = true;
    this.form.mp3Url = $event;
  }
}

