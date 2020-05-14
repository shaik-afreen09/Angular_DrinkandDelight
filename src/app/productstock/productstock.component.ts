import { Component, OnInit } from '@angular/core';
import { ProductStockService } from './productstock.service';
import { ProductStock } from './productstock';

@Component({
  selector: 'stock-management',//app-productstock
  templateUrl: './productstock.component.html',
  styleUrls: ['./productstock.component.css']
})
export class ProductStockComponent implements OnInit {

  

   ngOnInit()
   {
      
   }

}