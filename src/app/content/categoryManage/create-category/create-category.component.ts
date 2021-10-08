import { Component, OnInit } from '@angular/core';
import {Category} from '../../../model/Category';
import {CategoryService} from '../../../service/category-service/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {
  form: any = {};
  category: Category;
  status = 'Please fill in the form to create category';
  error1: any = {
    message: "no_name_category"
  }
  error2: any = {
    message: "no_avatar-category"
  }
  success: any = {
    message: "yes"
  }
  error3: any = {
    message: "create_failed"
  }

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }
  ngSubmit(){
    this.category = new Category(
      this.form.nameCategory,
      this.form.avatarCategory
    )
    this.categoryService.createCategory(this.category).subscribe(data =>{
      if(JSON.stringify(data)==JSON.stringify(this.error1)){
        this.status = 'The name Category is existed! Please try again!'
      }
      if(JSON.stringify(data)==JSON.stringify(this.error2)){
        this.status = 'Please upload Avatar'
      }
      if(JSON.stringify(data)==JSON.stringify(this.error3)){
        this.status = 'create_failed'
      }
      if(JSON.stringify(data)==JSON.stringify(this.success)){
        this.status = 'Create Success!'
      }
    })
  }
  onChangeAvatar($event){
    this.form.avatarCategory = $event;
  }
}
