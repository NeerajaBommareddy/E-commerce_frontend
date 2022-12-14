import { CartserviceService } from './../cartservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderItemserviceService } from './../order-itemservice.service';
import { UserserviceService } from './../userservice.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  user:any;
  userId:any;
  cartProducts:any;
  carts:any;
  orders:any;
  total:number=0;
  constructor(private userService:UserserviceService,private orderService:OrderItemserviceService,private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.userId= this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(this.userId).subscribe((data)=>{
      this.user=data;
    });
    this.orderService.getAllCartsOrdered(this.userId).subscribe(
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
    this.orderService.getAllOrderedProducts(this.userId).subscribe((data)=>{
          this.cartProducts=data;
          console.log(data);
    });
    this.orderService.getAllOrder_itembyUser(this.userId).subscribe((data)=>{
          this.orders=data;
          
    });
  }
  toUserPage(){
    this.router.navigateByUrl("/User/"+this.userId);
  }
  deleteOrder(id:number){
    this.orderService.deleteOrderById(id).subscribe((data)=>{
      console.log(data);
    });
    alert("Your Order has been Cancelled");
    window.location.reload();
  }
}
