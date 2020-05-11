import { Component, OnInit } from '@angular/core';
import { OrderProduct, MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fetch-product-orders',
  templateUrl: './fetch-product-orders.component.html',
  styleUrls: ['./fetch-product-orders.component.css']
})
export class FetchProductOrdersComponent implements OnInit {

  orders: OrderProduct[]=[];
  allcheck: boolean;

  constructor(private myservice: MyserviceService, private router: Router) { }

  ngOnInit(): void {
    this.myservice.getProductOrders().subscribe( response => this.handleSuccessfulResponse(response),
    );
    this.allcheck=this.myservice.allchec;
  }
  handleSuccessfulResponse(response) {
    this.orders = response;
  }
  
}
