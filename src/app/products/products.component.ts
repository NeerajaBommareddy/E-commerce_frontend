import { ProductserviceService } from '../productservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any;
  constructor(private productservice:ProductserviceService) { }

  ngOnInit(): void {
    this.productservice.getAllProducts().subscribe((data)=>{
      this.products=data;
    });
  }

}
