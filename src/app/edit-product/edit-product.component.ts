import { ProductserviceService } from './../productservice.service';
import { CategoryserviceService } from './../categoryservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product:any={
    product_id:0,
    name: '',
    description:'',
    available:true,
    unit_price:0,
    stock:0
  }
  categories:any;
  public adminId:any;
  public productId:any;

  constructor(private router:Router,private route:ActivatedRoute,private productService:ProductserviceService) { }

  ngOnInit(): void {
    this.adminId=this.route.snapshot.paramMap.get('adminId');
    this.productId=this.route.snapshot.paramMap.get('productId');
    console.log("admin="+this.adminId+"product="+this.productId);
    this.getProductbyId();
  }
  getProductbyId(){
    this.productService.getProductsById(this.productId).subscribe((data)=>{
      console.log(data);
      this.product=data;
    });
  }
  onSubmit(form:NgForm){
    console.log(this.product);
    this.updateCategory();
    console.log(this.product);
    alert("Updated Product Details Successfully");
    this.router.navigateByUrl('Admin/'+this.adminId);
  }
  updateCategory(){
    this.productService.updateProductbyId(this.productId,this.product).subscribe((data)=>{
      this.product=data;
    });
  }
  
}
