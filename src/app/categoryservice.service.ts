import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryserviceService {

  constructor(private httpClient:HttpClient) { }
  getAllCategories(){
    return this.httpClient.get("http://localhost:8089/getAllCategories");
  }
  getCategorybyId(categoryId:number){
    return this.httpClient.get("http://localhost:8089/getCategory/"+categoryId);
  }
  updateCategorybyId(categoryId:number,category:Category){
    return this.httpClient.put("http://localhost:8089/editCategory/"+categoryId,category);
    
  }
  addCategory(category:Category){
    return this.httpClient.post("http://localhost:8089/addCategory",category);
  }
}
