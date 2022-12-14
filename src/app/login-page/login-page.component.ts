import { Router } from '@angular/router';
import { UserserviceService } from './../userservice.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  user:User={
    user_id:0,
    first_name:'',
    last_name:'',
    email:'',
    password:'',
    role:'',
    contact_number:''
  }
  msg:any;
  constructor(private userservice:UserserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    console.log(this.user);
    this.userservice.getUserByEmailIdandPassword(this.user).subscribe((data)=>{
      console.log(data)
      this.user=data;
      if(this.user){
      console.log(this.user.first_name); 
      this.router.navigateByUrl('/'+this.user.role+'/'+this.user.user_id);
      }
      else{
        this.msg="Invalid Credentials";
      }
    });
       
  }
}
