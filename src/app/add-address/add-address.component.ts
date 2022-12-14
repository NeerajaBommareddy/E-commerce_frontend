import { AddressserviceService } from './../addressservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Address } from './../Address';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
  address:Address={
    address_id: 0,
    user_id: 0,
    address_line_one: '',
    address_line_two: '',
    city: '',
    state: '',
    pin_code: '',
    country: '',
    type: ''
  }
  public id:any;
  public role:any;
  constructor(private router:Router,private route:ActivatedRoute,private addressService:AddressserviceService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.role=this.route.snapshot.paramMap.get('role');
    console.log("Id="+this.id+"role"+this.role);
    
  }
  addAddress(){
    this.addressService.addAddressbyUserId(this.id,this.address).subscribe(
      data=>{
      console.log(data);
    });
  }
  onSubmit(form:NgForm){
    console.log(this.address);
    this.addAddress();
    alert("Added Address Successfully");
    this.router.navigateByUrl("/"+this.role+"/"+this.id);
  }

}
