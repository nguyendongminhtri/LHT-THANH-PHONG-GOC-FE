import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../../../model/Category';
import {CategoryService} from '../../../service/category-service/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {
  // @ts-ignore
  category: Category = new Category();
  status = 'Please fill in the form to Edit Category!'
  error1: any = {
    message: "no_name_category"
  }
  success: any = {
    message: "yes"
  }
  constructor(private actRouter: ActivatedRoute,
              private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.actRouter.paramMap.subscribe(categoryId =>{
      const id = +categoryId.get('id');
      console.log('id == ', id);
      this.categoryService.getCategoryById(id).subscribe(result =>{
        this.category = result;
      })
    })
  }
  ngSubmit(){
    this.categoryService.updateCategory(this.category.id, this.category).subscribe(data =>{
      if(JSON.stringify(data)==JSON.stringify(this.error1)){
          this.status = 'The name category is existed! Please try again!'
      }
      if(JSON.stringify(data)==JSON.stringify(this.success)){
        this.status = 'Update success!'
      }
    })
  }
  onChangeAvatar($event){
    this.category.avatarCategory = $event;
  }
}
