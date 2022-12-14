import { Order_item } from './Order_item';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderItemserviceService {

  constructor(private httpClient:HttpClient) { }
  getAllOrder_items(){
    return this.httpClient.get("http://localhost:8089/getAllOrderItems");
  }
  getAllOrder_itembyUser(userId:number){
    return this.httpClient.get("http://localhost:8089/getAllOrders/"+userId);
  }
  addOrderItem(order_item:Order_item){
    return this.httpClient.post("http://localhost:8089/addOrderItem",order_item);
  }
  getAllOrderedProducts(userId:number){
    return this.httpClient.get("http://localhost:8089/getAllOrderedProducts/"+userId);
  }
  getAllCartsOrdered(userId:number){
    return this.httpClient.get("http://localhost:8089/getAllCartsOrdered/"+userId);
  }
  deleteOrderById(id:number){
    return this.httpClient.delete("http://localhost:8089/deleteorderitem/"+id);
  }
}
