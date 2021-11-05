import { Component, OnInit } from '@angular/core';

import {Song} from '../../../model/Song';
import {PageEvent} from '@angular/material/paginator';
import {SongService} from '../../../service/song-service/song.service';

@Component({
  selector: 'app-page-song',
  templateUrl: './page-song.component.html',
  styleUrls: ['./page-song.component.scss']
})
export class PageSongComponent implements OnInit {
  totalElements: number = 0;
  songs: Song[] = [];
  searchText;
  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.getPageSong({page:0, size: 3})
  }
  private getPageSong(request) {
    this.songService.pageSong(request).subscribe(data => {
      console.log('data --> ', data);
      this.songs = data['content'];
      console.log('singerList -->', data['singerList']);
      console.log('data[content] ---->', data['content']);
      this.totalElements = data['totalElements'];
      console.log('data[totalElements] == ', data['totalElements']);
    });
  }

  nextPage(event: PageEvent) {
    console.log('event -->', event);
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    console.log('request[size]', request['size']);
    this.getPageSong(request);
  }
}
