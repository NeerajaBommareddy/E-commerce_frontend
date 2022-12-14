import { NgForm } from '@angular/forms';
import { CategoryserviceService } from './../categoryservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductserviceService } from './../productservice.service';
import { Product } from './../Product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product:Product={
    product_id:0,
    name:'',
    description:'',
    code:'',
    unit_price:0,
    stock:0,
    image:'',
    available:true,
    category_id:0
  }
  categories:any;
  public adminId:any;
  constructor(private productService:ProductserviceService,private router:Router,private route:ActivatedRoute,private categoryService:CategoryserviceService) { }

  ngOnInit(): void {
    this.adminId=this.route.snapshot.paramMap.get('adminId');
    this.categoryService.getAllCategories().subscribe((data)=>{
      this.categories=data;
    });
  }
  addProduct(){
    this.productService.addProduct(this.product).subscribe(
      data=>{
      console.log(data);
    });
  }
  onSubmit(form:NgForm){
    console.log(this.product);
    this.addProduct();
    alert("Product added Successfully");
    this.router.navigateByUrl('Admin/'+this.adminId);
  }

}
