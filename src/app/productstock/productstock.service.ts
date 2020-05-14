import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductStock } from './productstock';
import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ProductStockService {

  public constructor(private httpClient:HttpClient){ }
  ps:ProductStock;
   public getOrder(orderId:number)  : Observable<ProductStock>   
   {
      return this.httpClient.post<any>('http://localhost:8015/productstock/getOrder',{"orderId":orderId});
   }
   public getAll()  : any 
   {
      return this.httpClient.get<any>('http://localhost:8015/productstock/getAll');
   }
   public updateExitDate(exitdate:String,orderid:number,deliverydate:string) : any
   {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/plain, */*',
        'Content-Type': 'application/json' // We send JSON
      }),
      responseType: 'text' as 'json'  // We accept plain text as response.
    };
      this.ps= new ProductStock('',0,0,0,0,'',deliverydate,'','','',exitdate,orderid);
    //   this.getOrder(ps:Pr)
      return this.httpClient.put<any>('http://localhost:8015/productstock/updateExitDate',this.ps,httpOptions);
   }
   public updateStock(mandate:String,exitdate:String,orderid:number,quality:string) : any
   {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/plain, */*',
        'Content-Type': 'application/json' // We send JSON
      }),
      responseType: 'text' as 'json'  // We accept plain text as response.
    };
      this.ps= new ProductStock('',0,0,0,0,'','',mandate,exitdate,quality,'',orderid);
      return this.httpClient.put<any>('http://localhost:8015/productstock/updateStock',this.ps,httpOptions);
   }

  

} 