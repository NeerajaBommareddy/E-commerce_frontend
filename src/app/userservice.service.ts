import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpClient: HttpClient) {   }
  getAllusers(){
    return this.httpClient.get("http://localhost:8089/getAllUsers");
  }
  addUser(user:User){
    return this.httpClient.post("http://localhost:8089/addUser",user);
  }
  getUserById(id:number):Observable<any>{
    return this.httpClient.get("http://localhost:8089/user/"+id);
  }
  getUserByEmailIdandPassword(user:User):Observable<any>{
    return this.httpClient.post("http://localhost:8089/login",user);
  }
  updateUserbyId(id:number,user:User){
    return this.httpClient.put("http://localhost:8089/edituser/"+id,user);
  }
  getUserByEmail(email:string){
    return this.httpClient.get("http://localhost:8089/getUser/"+email);
  }
}
