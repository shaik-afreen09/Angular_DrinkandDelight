import { Component, OnInit } from '@angular/core';
import {RawMaterialStockService} from '../rawmaterialstock/rawmaterialstock.service';
@Component({
  selector: 'app-rawmaterial-update',
  templateUrl: './rawmaterial-update.component.html',
  styleUrls: ['./rawmaterial-update.component.css']
})
export class RawmaterialUpdateComponent implements OnInit {

  constructor(private rawservice:RawMaterialStockService) { }

  ngOnInit(): void {
  }
  updatedata(data)
  {
    this.rawservice.updateStock(data.rawid,data.mandate,data.exitdate).subscribe((data)=>{
    
      if(data!="Item Not Found")
      alert("Data Updated Succesfully");
      else
      alert("Data not Updated Succesfully. Please Provide Valid Order ID");
  
    });
  }
}
