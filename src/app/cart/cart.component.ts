import { Bill } from './../Bill';
import { OrderItemserviceService } from './../order-itemservice.service';
import { Order_item } from './../Order_item';
import { ProductserviceService } from './../productservice.service';
import { NgForm } from '@angular/forms';
import { UserserviceService } from './../userservice.service';
import { Cart } from './../Cart';
import { ActivatedRoute, Router } from '@angular/router';
import { CartserviceService } from './../cartservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  msg:any;
  linkToUser:any;
  idUser:any;
 cart:any={
    cart_id:0,
    product_id:0,
    user_id:0,
    quantity:0,
    cost:0,
  }
  order_item:Order_item={
    order_item_id:0,
    cart_id:0,
    order_status:'Order Confirmed',
    shipment_address:'',
    order_date:new Date(),
  }
  bill:Bill={
    bill_id:1,
    order_item_id:0,
    amount:0,
  }
  unitPrice:any;
  editCart:any;
  total:number=0;
    //cart:any;
  isCarts=false;
  isEditCart=true;
  isShipment=true;
  isBill=true;
  user:any;
  carts:any;
  products:any;
  amount:any;
  cartProducts:any;
  cartItems:any;
  constructor(private cartService:CartserviceService,private route:ActivatedRoute,private userService:UserserviceService,private router:Router,
    private productService:ProductserviceService,private orderItemService:OrderItemserviceService) { }

  ngOnInit(): void { 
    this.idUser=this.route.snapshot.paramMap.get('id');
    this.linkToUser="To Purchase Products click here";
    console.log("User ="+this.idUser);
    this.cartService.getAllcartsByUserId(this.idUser).subscribe(
      (data)=>{   
          //console.log(data);
          this.carts=data;
          //console.log(this.carts);
          for(var i in this.carts){
            //console.log(this.carts[i].cost);
            this.total+=this.carts[i].cost;        
           }
           //console.log(this.total); 
        });
    this.userService.getUserById(this.idUser).subscribe((data)=>{
      this.user=data;
      console.log(data);
    });
    this.cartService.getCartProductsbyUser(this.idUser).subscribe((data)=>{
      this.cartProducts=data;
      console.log(data);
    });
  }
  toUserPage(){
    this.router.navigateByUrl("/User/"+this.idUser);
  }
  onEditCartClicked(cart_id:number,product_id:number){
    this.isEditCart=!this.isEditCart;
    this.cartService.getCartById(cart_id).subscribe((data)=>{
      console.log(data);
      this.editCart=data;
      this.cart.product_id=parseInt(this.editCart.product_id);
      this.cart.quantity=parseInt(this.editCart.quantity);
      this.cart.cost=parseInt(this.editCart.cost);
      this.cart.user_id=parseInt(this.editCart.user_id);
      this.cart.cart_id=cart_id;
    });
    this.productService.getProductsById(product_id).subscribe((data)=>{
      console.log(data);
      this.products=data;
      this.unitPrice=this.products.unit_price;    
    });
  }
  onDeleteCartClicked(cart_id:number){
    this.cartService.deleteCartById(cart_id).subscribe((data)=>{
      console.log(data);
    });
    alert("Deleted from Cart");
    window.location.reload();
  }
  onEdit(form:NgForm){
    console.log(this.cart);
    var amount=(this.cart.quantity)*this.unitPrice;
    this.cart.cost=amount;
    console.log(this.cart);
    this.cartService.updateCartbyId(this.cart.cart_id,this.cart).subscribe((data)=>{
      this.cart=data;
    })
    window.location.reload();
    
  }
  placeOrder(form:NgForm){
    console.log(this.order_item.shipment_address);
    for(var i in this.carts){
      //console.log(this.carts[i].cart_id);
      this.order_item.cart_id=this.carts[i].cart_id;
      console.log(this.order_item);
      this.orderItemService.addOrderItem(this.order_item).subscribe((data)=>{
        console.log(data);
      });
    }
    
    alert("Placed Order Successfully");
    this.bill.amount=this.total;
     console.log(this.bill.amount);
     this.isShipment=true;
     this.isBill=false;
  }
  toggleShipmentInfo(){
    this.isCarts=true;
    this.isEditCart=true;
    this.isShipment=false;
  }
  
}
