import { Component, OnInit } from '@angular/core';
import {RawMaterialStockService} from '../rawmaterialstock/rawmaterialstock.service';

@Component({
  selector: 'app-rawmaterial-process-date',
  templateUrl: './rawmaterial-process-date.component.html',
  styleUrls: ['./rawmaterial-process-date.component.css'],

  providers:[RawMaterialStockService],

})
export class RawmaterialProcessDateComponent implements OnInit {

  constructor(private rawservice:RawMaterialStockService) { }

  ngOnInit(): void {
  }

processupdate(data)
{
 // this.rms.orderId=data.rawid;
 // this.rms.processDate=data.rawdate;
  
  this.rawservice.updateProcessDate(data.rawid,data.rawdate,data.deliverydate).subscribe((data)=>{
    if(data!="Item Not Found")
    alert("Data Updated Succesfully");
    else
    alert("Data not Updated Succesfully. Please Provide Valid Order ID");

  },
  
  
  );
}

}
