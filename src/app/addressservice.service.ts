import { Address } from './Address';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressserviceService {

  constructor(private httpClient:HttpClient) { }
  getAllAddressbyUserId(id:number){
    return this.httpClient.get("http://localhost:8089/getAllAddress/"+id);
  }
  addAddressbyUserId(id:number,address:Address){
    return this.httpClient.post("http://localhost:8089/addAddress/"+id,address);
  }
}
