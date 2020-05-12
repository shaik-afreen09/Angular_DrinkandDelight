import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RawMaterialStock } from './rawmaterialstock';
import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
@Injectable({
   providedIn:'root'
})
export class RawMaterialStockService
{
   public constructor(private httpClient:HttpClient){ }
   rms:RawMaterialStock;
   public getOrder(orderId:number)  : Observable<RawMaterialStock>   
   {
      return this.httpClient.get<any>('http://localhost:8015/rawmaterial/getOrder/'+orderId);
   }
   public getAll()  : any 
   {
      return this.httpClient.get<any>('http://localhost:8015/rawmaterial/getAll');
   }
   public updateProcessDate(rawid:number,rawdate:String) : any
   {
    const httpOptions = {
        headers: new HttpHeaders({
          'Accept': 'text/plain, */*',
          'Content-Type': 'application/json' // We send JSON
        }),
        responseType: 'text' as 'json'  // We accept plain text as response.
      };
      this.rms = new RawMaterialStock('',0,0,0,0,'','','','','',rawdate,rawid);
      return this.httpClient.put<any>('http://localhost:8015/rawmaterial/updateProcessDate',this.rms,httpOptions);
   }
   public updateStock(rawid:number,mandate:String,exitdate:String) : any
   {
    const httpOptions = {
        headers: new HttpHeaders({
          'Accept': 'text/plain, */*',
          'Content-Type': 'application/json' // We send JSON
        }),
        responseType: 'text' as 'json'  // We accept plain text as response.
      };
      this.rms = new RawMaterialStock('',0,0,0,0,'','',mandate,exitdate,'','',rawid);
      return this.httpClient.put<any>('http://localhost:8015/rawmaterial/updateStock',this.rms,httpOptions);
   }

  

} 