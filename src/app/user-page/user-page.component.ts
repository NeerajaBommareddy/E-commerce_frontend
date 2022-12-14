import { User } from './../User';
import { AddressserviceService } from './../addressservice.service';
import { NgForm, FormBuilder, Validators } from '@angular/forms';


import { CategoryserviceService } from './../categoryservice.service';
import { ProductserviceService } from './../productservice.service';
import { UserserviceService } from './../userservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../Cart';
import { CartserviceService } from '../cartservice.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  user:any;
  userId:any;
  products:any;
  categories:any;
  productsbyCategory:any;
  categoryId:any;
  productsbysearch:any;
  cart:any={
    cart_id:0,
    user_id:0,
    product_id:0,
    quantity:1,
    cost:0
  }
  
  role="User";
  address:any;
  isProducts=false;
  isProductsbyCategory=false;
  isUserInfo=true;
  isEditInfo=true;
  isProductBySearch=true;
  formSearch=this.fb.group({
    key:['',Validators.required],
  });
  constructor(private route:ActivatedRoute,private router:Router,private userService:UserserviceService,private productService:ProductserviceService,
    private categoryService:CategoryserviceService,private addressService:AddressserviceService,private cartService:CartserviceService,
    private fb:FormBuilder){ }

  ngOnInit(): void {
    this.userId= this.route.snapshot.paramMap.get('id');
    this.cart.user_id=this.userId;
    this.productService.getAllProducts().subscribe((data)=>{
      this.products=data;
      console.log(data);
    });
    this.categoryService.getAllCategories().subscribe((data)=>{
      this.categories=data;
      //this.idCategory=this.categories.category_id;
    });
    this.userService.getUserById(this.userId).subscribe(data=>{
      this.user=data;
      /*this.first_name=this.user.first_name;
      this.last_name=this.user.last_name;
      this.email=this.user.email;
      this.contact_number=this.user.contact_number;
      */
      console.log(this.user);
    });
    this.addressService.getAllAddressbyUserId(this.userId).subscribe((data)=>{
      this.address=data;
    });


    

}

  addToCart(idProduct:number,price:number){
    this.cart.user_id=this.userId;
    this.cart.product_id=idProduct;
    this.cart.cost=(this.cart.quantity)*(price);
    console.log(this.cart);
    this.cartService.addToCart(this.cart).subscribe(
      data=>{
      console.log(data);
    });
        
  }
  showCart(idUser:number){
    this.router.navigateByUrl('cart/User/'+idUser);
   }
  addAddress(){
    this.router.navigateByUrl('/addAddress/'+this.role+"/"+this.userId);
  }
  displayProductsbyCategory(id:number){
    this.isProductsbyCategory=false;
    this.isProducts=true;
    this.isUserInfo=true;
    this.isEditInfo=true;
    this.isProductBySearch=true;
    this.categoryId= id;
   console.log(this.categoryId);
    this.productService.getAllProductsByCategory(this.categoryId).subscribe((data)=>{
      console.log(data);
      this.productsbyCategory=data;
    });  
  }
 
  showInfo(){
    this.isUserInfo=!this.isUserInfo;
    this.isProducts=true;
    this.isEditInfo=true;
    this.isProductsbyCategory=true;
  } 
   toggleProducts(){
    this.isProducts=!this.isProducts;
    this.isProductsbyCategory=true;
    this.isUserInfo=true;
    this.isEditInfo=true;
    this.isProductBySearch=true;
  }
  toggleEditInfo(){
    this.isEditInfo=!this.isEditInfo;
    this.isProducts=true;
    this.isProductsbyCategory=true;
    this.isUserInfo=true;
    this.isProductBySearch=true;
  }
  onEditInfo(form:NgForm){
    console.log(this.user);
    this.updateInfo();
  }
  updateInfo(){
    this.userService.updateUserbyId(this.userId,this.user).subscribe((data)=>{
      this.user=data; 
     /* this.first_name=this.user.first_name;
     /* this.last_name=this.user.last_name;
      this.email=this.user.email;
      this.contact_number=this.user.contact_number; 
      */     
    }
    );
    alert("Updated Successfully")
    window.location.reload();
  }
  onSearch(){
    this.isProductBySearch=false;
    this.isProducts=true;
    this.isProductsbyCategory=true;
    this.isUserInfo=true;
    console.log(this.formSearch.value);
    var keyword=this.formSearch.controls['key'].value;
    console.log(keyword);
    this.productService.searchProductByKey(keyword).subscribe((data)=>{
      console.log(data);
      this.productsbysearch=data;
    }
    );

  }
  showOrders(idUser:number){
    this.router.navigateByUrl("/orders/"+idUser);
  }
  logOut():void{
    window.sessionStorage.clear();
  }


}
