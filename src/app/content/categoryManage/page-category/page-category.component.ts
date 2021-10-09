import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {UserAccount} from '../../../model/UserAccount';
import {CategoryService} from '../../../service/category-service/category.service';
import {Category} from '../../../model/Category';
import {TokenService} from '../../../service/token.service';

@Component({
  selector: 'app-page-category',
  templateUrl: './page-category.component.html',
  styleUrls: ['./page-category.component.scss']
})
export class PageCategoryComponent implements OnInit {
  totalElements: number = 0;
  categorys: Category[] = [];
  searchText;
  loading: boolean;
  isCheckUser = false;
  constructor(private categoryService: CategoryService,
              private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getListRequest({page: 0, size: 3});
    if(this.tokenService.getToken()){
      this.isCheckUser = true;
    }
  }
  private getListRequest(request) {
    this.loading = true;
    this.categoryService.pageCategory(request).subscribe(data => {
      console.log('data --> ', data);
      this.categorys = data['content'];
      console.log('data[content] ---->', data['content']);
      this.totalElements = data['totalElements'];
      console.log('data[totalElements] == ', data['totalElements']);
      this.loading = false;
    }, error => {
      this.loading = false;
    });
  }

  nextPage(event: PageEvent) {
    console.log('event -->', event);
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    console.log('request[size]', request['size']);
    this.getListRequest(request);
  }
}
