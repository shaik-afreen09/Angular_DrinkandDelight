import { Component, OnInit } from '@angular/core';
import { ProductStockService } from './productstock.service';
import { ProductStock } from './productstock';

@Component({
  selector: 'stock-management',//app-productstock
  templateUrl: './productstock.component.html',
  styleUrls: ['./productstock.component.css']
})
export class ProductStockComponent implements OnInit {

  ps:ProductStock = new ProductStock('',0,0,0,0,'','','','','','',0)
   
   public constructor(private pss:ProductStockService){}
   public getOrder():void
   {
       this.pss.getOrder(this.ps.orderId).subscribe(data => this.ps=data );
   }

   public updateExitDate():void
   {
       this.pss.updateExitDate("null",0).subscribe();
   } 

   public updateStock() : void
   {
       this.pss.updateStock("null","null",0,"null").subscribe();
   }



   ngOnInit()
   {
      
   }

}