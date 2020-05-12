import { Component, OnInit } from '@angular/core';
import {RawMaterialStockService} from '../rawmaterialstock/rawmaterialstock.service';
import {RawMaterialStock} from '../rawmaterialstock/rawmaterialstock';
@Component({ 
  selector: 'app-rawmaterial-track',
  templateUrl: './rawmaterial-track.component.html',
  styleUrls: ['./rawmaterial-track.component.css'],
  providers:[RawMaterialStockService]
})
export class RawmaterialTrackComponent implements OnInit {
  message:string;
  table:boolean=false;
  rmsid:number=0;
  rms:RawMaterialStock = new RawMaterialStock('',0,0,0,0,'','','','','','',0)
  constructor(private rawservice: RawMaterialStockService) { }
  rmslist: RawMaterialStock[]=[];
  single: boolean=false;
  ngOnInit(): void {
    this.rawservice.getAll().subscribe((data)=>this.rmslist=data);
  }

  showtable()
  {
    this.message='';
this.table=true;
this.single=false;
  }

  requestdata(data)
  {
//if(data==null)
console.log(data);

this.rawservice.getOrder(data.orderId).subscribe((rms)=>{
  this.table=false;
  this.single=true; 
  this.rms=rms;
  if(rms.orderId==0)
  this.message=`<center>Please Enter Correct Rawmaterial Id. Entered Rawmaterial id is Invalid'</
  center>`;
  else
  this.message=`<h2 style="text-align:center">Raw Material Stock Details </h2> 
  <table *ngIf="single" class="table table-striped col-md-6 container">
  <tr>
     <th>Order Id : ${rms.orderId}</th>
  </tr>
  <tr>
     <th>Product Name : ${rms.name}</th>
  </tr>
  <tr>
     <th>Price Per Unit : ${rms.pricePerUnit}</th>
  </tr>
  <tr>
     <th>Quantity Value : ${rms.quantityValue}</th>
  </tr>
  <tr>
      <th>Quantity Unit : ${rms.quantityUnit}</th>
   </tr>
   <tr>
      <th>Price : ${rms.price}</th>
   </tr>
   <tr>
      <th>Warehouse Id : ${rms.warehouseId}</th>
   </tr>
   <tr>
      <th>Delivery Date : ${rms.deliveryDate}</th>
   </tr>
   <tr>
      <th>Manufacturing Date : ${rms.manufacturingDate}</th>
   </tr>
   <tr>
      <th>Expiry Date : ${rms.expiryDate}</th>
   </tr>
  
   <tr>
      <th>Process Date : ${rms.processDate}</th>
   </tr>

</table>
  `;
  
},error=>{
 alert('Please Enter Correct Rawmaterial Id. Entered Rawmaterial id is Invalid');
  
  
  
  
  });


  }
}
