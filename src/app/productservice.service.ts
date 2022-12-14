import { Product } from './Product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  
  constructor(private httpClient:HttpClient) { }
  getAllProducts(){
    return this.httpClient.get("http://localhost:8089/getAllProducts");
  }
  getAllProductsByCategory(categoryid:number){
    return this.httpClient.get("http://localhost:8089/getProducts/"+categoryid);
  }
  getProductsById(productId:number){
    return this.httpClient.get("http://localhost:8089/product/"+productId);  
  }
  updateProductbyId(productId:number,product:Product){
    return this.httpClient.put("http://localhost:8089/editproduct/"+productId,product); 
  }
  addProduct(product:Product){
    return this.httpClient.post("http://localhost:8089/addProduct",product);
  }
  deleteProductById(productId:number){
    return this.httpClient.delete("http://localhost:8089/deleteProduct/"+productId);
  }
  searchProductByKey(key:string){
    return this.httpClient.get("http://localhost:8089/searchProducts/"+key);
  }
}
