import { OrderItemserviceService } from './../order-itemservice.service';
import { NgForm } from '@angular/forms';
import { AddressserviceService } from './../addressservice.service';

import { CategoryserviceService } from './../categoryservice.service';
import { ProductserviceService } from '../productservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-manage',
  templateUrl: './admin-manage.component.html',
  styleUrls: ['./admin-manage.component.css']
})
export class AdminManageComponent implements OnInit {

  users:any;
  first_name:any;
  last_name:any;
  email:any;
  password:any;
  contact_number:any;

  admin:any;
  categories:any;
  products:any;
  address:any;
  orders:any;
  isCategory=true;
  isUserList=true;
  isProducts=true;
  isAdmin=true;
  isEditInfo=true;
  isAllOrders=true;
  public role:any="Admin";
  private adminId:any;
  constructor(private router:Router,private userservice:UserserviceService,private categoryService:CategoryserviceService,
    private productservice:ProductserviceService,private route:ActivatedRoute,private addressService:AddressserviceService,
    private orderItemService:OrderItemserviceService) { }

  ngOnInit(): void {
    this.adminId= this.route.snapshot.paramMap.get('id');
    console.log("Id="+this.adminId+"role="+this.role);
    this.userservice.getAllusers().subscribe((data)=>{
      //console.log(data);
      this.users=data;
    }
    );
    this.orderItemService.getAllOrder_items().subscribe((data)=>{
      this.orders=data;
    });

    this.categoryService.getAllCategories().subscribe((data)=>{
      this.categories=data;
    });
    this.productservice.getAllProducts().subscribe((data)=>{
      this.products=data;
      console.log(data);
    });
    this.userservice.getUserById(this.adminId).subscribe((data)=>{
      this.admin=data;
      this.first_name=this.admin.first_name;
      this.last_name=this.admin.last_name;
      this.email=this.admin.email;
      this.contact_number=this.admin.contact_number;
      console.log(this.admin);
    });
    this.addressService.getAllAddressbyUserId(this.adminId).subscribe((data)=>{
      this.address=data;
    });
  }

  onAddCategoryClicked(){
  this.router.navigateByUrl('/addCategory/'+this.adminId);
 }
  onAddProductClicked(){
  this.router.navigateByUrl('/addProduct/'+this.adminId);
  }
  onEditCategoryClicked(categoryId:number){
    this.categoryService.getCategorybyId(categoryId).subscribe((data)=>{
      console.log(data);
      console.log(this.adminId);
    }
    );
    this.router.navigateByUrl('/editCategory/'+this.adminId+'/'+categoryId);
    //console.log(id);
  }
 
  onEditProductClicked(productId:number){
    this.productservice.getProductsById(productId).subscribe((data)=>{
      console.log(data);
      console.log(this.adminId);
    });
    this.router.navigateByUrl('/editProduct/'+this.adminId+'/'+productId);
  }
  onDeleteProductClicked(productId:number){
    this.productservice.deleteProductById(productId).subscribe((data)=>{
      console.log(data);
    });
    alert("Deleted the product")
    window.location.reload();
  }
  onEditInfo(form:NgForm){
    console.log(this.admin);
    this.updateInfo();
  }
  addAddress(){
    this.router.navigateByUrl('/addAddress/'+this.role+"/"+this.adminId);
  }
  updateInfo(){
    this.userservice.updateUserbyId(this.adminId,this.admin).subscribe((data)=>{
      this.admin=data;
    }
    );
    alert("Updated Successfully")
    window.location.reload();
  }
  toggleUsers(){
    this.isUserList=!this.isUserList;
    this.isAdmin=true;
    this.isProducts=true;
    this.isCategory=true;
    this.isEditInfo=true;
    this.isAllOrders=true;
  }
  toggleCategory(){
    this.isCategory=!this.isCategory;
    this.isAdmin=true;
    this.isProducts=true;
    this.isUserList=true;
    this.isEditInfo=true;
    this.isAllOrders=true;
  }
  toggleProducts(){
    this.isProducts=!this.isProducts;
    this.isAdmin=true;
    this.isCategory=true;
    this.isUserList=true;
    this.isEditInfo=true; 
    this.isAllOrders=true;   
  }
  toggleOrders(){
    this.isAllOrders=!this.isAllOrders;
    this.isAdmin=true;
    this.isCategory=true;
    this.isUserList=true;
    this.isEditInfo=true; 
    this.isProducts=true;
  }
  toggleInfo(){
    this.isAdmin=!this.isAdmin;
    this.isProducts=true;
    this.isUserList=true;
    this.isCategory=true;
    this.isEditInfo=true;
    this.isAllOrders=true;
  }
  toggleEditInfo(){
    this.isEditInfo=false;
    this.isAdmin=true;
    this.isUserList=true;
    this.isCategory=true;
    this.isAllOrders=true;
  }
}
