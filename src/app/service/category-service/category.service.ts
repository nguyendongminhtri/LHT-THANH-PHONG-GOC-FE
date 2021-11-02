import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Category} from '../../model/Category';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
//API_LOCAL
//   private API_CATEGORY = environment.API_LOCAL+'category';
  //API SERVER
  private API_CATEGORY = environment.API_SERVER+'category';
  constructor(private http: HttpClient) { }
  createCategory(category: Category): Observable<Category>{
    return this.http.post<Category>(this.API_CATEGORY, category)
  }
  pageCategory(request){
    const params = request;
    return this.http.get(this.API_CATEGORY, {params})
  }
  searchByNameCategory(request, search){
    const params = request;
    const  nameCategory = search;
    //Cach 1 ket hop voi  @Requesparam bên BE
    // return this.http.get(this.API_CATEGORY+'/search?nameCategory='+nameCategory, {params})

    //Cach 2: kết hợp với cách viết dùng @PathVariable
    return this.http.get(this.API_CATEGORY+'/search/'+nameCategory,{params})
  }
  getCategoryById(id: number): Observable<Category>{
    return this.http.get<Category>(`${this.API_CATEGORY}/${id}`)
  }
  updateCategory(id: number, category: Category): Observable<Category>{
    // return this.http.put<Category>(`${this.API_CATEGORY}/${id}`, category)
    return this.http.put<Category>(this.API_CATEGORY+'/'+id, category)
  }
  getListCategory(): Observable<Category[]>{
    return this.http.get<Category[]>(this.API_CATEGORY+'/list')
  }
}
