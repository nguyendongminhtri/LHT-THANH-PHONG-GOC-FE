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
  searchCategorys: Category[] = [];
  searchText;
  nameCategory;
  loading: boolean;
  isCheckUser = false;
  checkSearch = false;
  sizeSearch: number = 0;
  constructor(private categoryService: CategoryService,
              private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isCheckUser = true;
    }
    if(!this.checkSearch){
      this.getListRequest({page:0, size: 3})
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
    this.getSearchRequest(request,this.nameCategory);
  }
  private getSearchRequest(request, nameCategory) {
    this.loading = true;
    this.nameCategory = nameCategory;
    console.log('nameCategory === ', this.nameCategory);
    if(this.nameCategory == ''){
      return;
    }
    this.categoryService.searchByNameCategory(request,this.nameCategory).subscribe(data => {
      console.log('data --> ', data);
      this.searchCategorys = data['content'];
      console.log('data[content] ---->', data['content']);
      this.totalElements = data['totalElements'];
      this.sizeSearch = this.totalElements;
      console.log('data[totalElements] == ', data['totalElements']);
      this.loading = false;
    }, error => {
      this.loading = false;
    });
  }
  private onSearch(){
    this.checkSearch = true;
    console.log('nameCategory == ', this.nameCategory);
    if(this.nameCategory ==''){
      this.checkSearch = false;
      return;
    }
      this.getSearchRequest({page:0, size: this.sizeSearch}, this.nameCategory);
    }
}
