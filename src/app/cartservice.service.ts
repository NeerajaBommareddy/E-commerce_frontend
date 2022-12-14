import { Cart } from './Cart';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  constructor(private httpClient:HttpClient) { }
  getAllcartsByUserId(idUser:number):Observable<any>{
    return this.httpClient.get("http://localhost:8089/allCartsbyUser/"+idUser);
  }
  addToCart(cart:Cart){
    return this.httpClient.post("http://localhost:8089/addToCart",cart);
  }
  updateCartbyId(cartId:number,cart:Cart){
    return this.httpClient.put("http://localhost:8089/editCart/"+cartId,cart); 
  }
  getCartById(cartId:number){
    return this.httpClient.get("http://localhost:8089/cart/"+cartId);  
  }
  deleteCartById(cartId:number){
    return this.httpClient.delete("http://localhost:8089/deleteCart/"+cartId);
  }
  getCartProductsbyUser(userId:number){
    return this.httpClient.get("http://localhost:8089/getAllCartProducts/"+userId);
  }
}
