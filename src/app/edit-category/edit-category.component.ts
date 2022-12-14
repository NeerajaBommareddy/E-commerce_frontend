
import { CategoryserviceService } from './../categoryservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  category:any={
    category_id:0,
    name: '',
    description:'',
    available:true,

  }
  public adminId:any;
  public categoryId:any;
  constructor(private router:Router,private route:ActivatedRoute,private categoryService:CategoryserviceService) { }

  ngOnInit(): void {
    this.adminId=this.route.snapshot.paramMap.get('adminId');
    this.categoryId=this.route.snapshot.paramMap.get('categoryId');
    console.log("admin="+this.adminId+"category="+this.categoryId);
    this.getCategorybyId();
  }
  getCategorybyId(){
    this.categoryService.getCategorybyId(this.categoryId).subscribe((data)=>{
      console.log(data);
      this.category=data;
    });
  }
  onSubmit(form:NgForm){
    //this.category=form;
    console.log(this.category);
    this.updateCategory();
    console.log(this.category);
    alert("Updated Category Details Successfully");
    this.router.navigateByUrl('Admin/'+this.adminId);
  }
  updateCategory(){
    this.categoryService.updateCategorybyId(this.categoryId,this.category).subscribe((data)=>{
      this.category=data;
    });
  }
}
