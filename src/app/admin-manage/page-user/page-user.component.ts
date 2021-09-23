import { Component, OnInit } from '@angular/core';
import {UserAccount} from '../../model/UserAccount';
import {AdminService} from '../../service/admin.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.scss']
})
export class PageUserComponent implements OnInit {
  totalElements: number = 0;
  users: UserAccount[] = [];
  loading: boolean;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getListRequest({page: 0, size: 3})
  }
  private getListRequest(request){
    this.loading = true;
    this.adminService.pageUser(request).subscribe(data =>{
      console.log('data --> ',data);
      this.users = data['content'];
      console.log('data[content] ---->', data['content']);
      this.totalElements = data['totalElements'];
      console.log('data[totalElements] == ', data['totalElements']);
      this.loading = false;
    }, error => {
      this.loading = false;
    })
  }
  nextPage(event: PageEvent){
    console.log('event -->', event);
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    console.log('request[size]', request['size']);
    this.getListRequest(request);
  }
}
