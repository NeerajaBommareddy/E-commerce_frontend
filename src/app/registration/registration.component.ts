import { Observable } from 'rxjs';
import { User } from './../User';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

import { Validators } from '@angular/forms';
import { AstMemoryEfficientTransformer } from '@angular/compiler';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user:User={
    user_id:0,
    first_name:'',
    last_name:'',
    email:'',
    password:'',
    role:'User',
    contact_number:''
  }
  constructor(private userService:UserserviceService) { }

  ngOnInit(): void {
  }
  registerEmployee(){
    this.userService.addUser(this.user).subscribe(
      data=>{ 
      console.log(data);
      }
      
    );
    
  }

  onSubmit(form:NgForm):void{
    console.log(this.user);
    this.registerEmployee();
    
    alert("registration Successful");
    
    window.location.reload();
    
  }

}
