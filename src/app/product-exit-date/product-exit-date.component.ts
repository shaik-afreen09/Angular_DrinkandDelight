
import { Component, OnInit } from '@angular/core';
import { ProductStockService } from '../productstock/productstock.service';
@Component({
  selector: 'app-product-exit-date',
  templateUrl: './product-exit-date.component.html',
  styleUrls: ['./product-exit-date.component.css']
})
export class ProductExitDateComponent implements OnInit {

  constructor(private productService: ProductStockService) { }

  ngOnInit(): void {
  }
updateexit(data)
{



  this.productService.updateExitDate(data.productid,data.exitdate).subscribe((data)=>{
   // alert("Data Updated Succesfully");
console.log(data);
    if(data!="Item Not Found")
    alert("Data Updated Succesfully");
    else
    alert("Data not Updated Succesfully. Please Provide Valid Order ID");
  });


}

}

