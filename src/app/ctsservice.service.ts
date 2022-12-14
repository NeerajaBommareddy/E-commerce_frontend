import { CtsEmployee } from './CtsEmployee';
import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CtsserviceService {

  constructor(private httpClient: HttpClient) { }
  getCtsEmployees(){
    return this.httpClient.get("http://localhost:8088/getCtsEmployees");
  }
  addCtsEmployee(employee:CtsEmployee){
    return this.httpClient.post("http://localhost:8088/addCtsEmployee",employee);
  }
  getCtsEmployeeById(id:number){
    return this.httpClient.get("http://localhost:8088/employee/"+id);
  }
  updateCtsEmployeeById(id:number,employee:CtsEmployee){
    return this.httpClient.put("http://localhost:8088/editemployee/"+id,employee);
  }
  deleteCtsEmployeeById(id:number){
    return this.httpClient.delete("http://localhost:8088/deleteemployee/"+id);
  }
}
