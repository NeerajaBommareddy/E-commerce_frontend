import { Router } from '@angular/router';
import { UserserviceService } from './../userservice.service';
import { HttpClient } from '@angular/common/http';
import { User } from './../User';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  user:any={
    user_id:0,
    first_name:'',
    last_name:'',
    email:'',
    password:'',
    role:'',
    contact_number:''
  }
  users:any;
  isResetForm=true;
  constructor(private userService:UserserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    this.userService.getUserByEmail(this.user.email).subscribe((data)=>{
      console.log(this.user.email);
      console.log(data);
      if(data){
        this.users=data;
        this.users.password='';
        this.isResetForm=false;
        this.user=this.users;
      }
      else{
        alert("Enter Valid email");
      }
    });
  }
  onReset(form:NgForm){
    console.log(this.user.user_id);
    this.userService.updateUserbyId(this.user.user_id,this.user).subscribe((data)=>{
      this.user=data;
    });
    alert("You have reset your password.");
    alert("Login with new Credentials");
    this.router.navigateByUrl('/login')
  }
}
