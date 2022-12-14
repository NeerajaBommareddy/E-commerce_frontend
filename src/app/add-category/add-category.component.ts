import { Router, ActivatedRoute } from '@angular/router';
import { CategoryserviceService } from './../categoryservice.service';
import { Category } from './../Category';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category:Category={
    category_id:0,
    name:'',
    description:'',
    available:true,
  }
  adminId:any;
  constructor(private categoryService:CategoryserviceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.adminId=this.route.snapshot.paramMap.get('adminId');
  }
  addCategory(){
    this.categoryService.addCategory(this.category).subscribe(
      data=>{
      console.log(data);
    });
  }
  onSubmit(form:NgForm){
    console.log(this.category);
    this.addCategory();    
    alert("Added Category");
    this.router.navigateByUrl('Admin/'+this.adminId);
    
  }
}
