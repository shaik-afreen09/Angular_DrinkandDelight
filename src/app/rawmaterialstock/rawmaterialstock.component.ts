import { Component, OnInit } from '@angular/core';
import { RawMaterialStockService } from './rawmaterialstock.service';
import { RawMaterialStock } from './rawmaterialstock';

@Component({
  selector:  'rmstock-management', //'app-rawmaterialstock',
  templateUrl: './rawmaterialstock.component.html',
 // styleUrls: ['./rawmaterialstock.component.css']
})
export class RawMaterialStockComponent implements OnInit {

  rms:RawMaterialStock = new RawMaterialStock('',0,0,0,0,'','','','','','',0)
   
  public constructor(private rmss:RawMaterialStockService){}
  public getOrder():void
  {
      this.rmss.getOrder(this.rms.orderId).subscribe(data => this.rms=data );
  }

  public updateProcessDate(rms:RawMaterialStock):void
  {
      this.rmss.updateProcessDate(0,"null").subscribe();
  } 

  public updateStock() : void
  {
      this.rmss.updateStock(0,"nulkl","null").subscribe();
  }



  ngOnInit()
  {
     
  }

}
