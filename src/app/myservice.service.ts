import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  public allchec: boolean=false;
 public userid: number;

  constructor(private httpService: HttpClient) { }
 //getting all orders raw material
  public getOrders() {
    console.log("ins service get all raw specs");
    return this.httpService.get<Order>("http://localhost:2222/getAll/"+this.userid);
    
  }
  //getting all product orders material
  public getProductOrders()
  {
    console.log("getting all product orders material");
    return this.httpService.get<OrderProduct>("http://localhost:7777/getAll/"+this.userid);
  }
  //getting all raw specs
  public getSpecs() {
    console.log("ins service get all raw specs");
    return this.httpService.get<Rawspecs>("http://localhost:1111/getALlSPecs");
    
  }
//ins service validation
  public validate(id:number,upass:string) {
    console.log("ins service validate");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<User>("http://localhost:8888/validate/"+id+"/"+upass);
    
  }
  //userid and disable content from html when ever reloaded
  public allCkeck(a:number) {
    this.allchec=true;
    this.userid=a
    console.log(a+"from service")
    
  }
  public getsup() {
    console.log("ins service get sup");
    return this.httpService.get<supplier>("http://localhost:3333/getAllSup");
    
  }
  public getware() {
    console.log("ins service get war");
    return this.httpService.get<warehouse>("http://localhost:4444/getAllDis");
    
  }
  //ins service  raw creation
  public addEmp(addemp: Order) {
    console.log("ins service  raw creation");
    
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post<Order>("http://localhost:2222/orderCreation", addemp, { headers, responseType: 'json'});
  }
  //ins service  product creation
  public addProduct(addOrder: OrderProduct) {
    console.log("ins service ");
    console.log(addOrder)
    console.log("ins service add");
    console.log(addOrder);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post<OrderProduct>("http://localhost:7777/orderCreation", addOrder, { headers, responseType: 'json'});
  }
  //getting all product specs
  public getProductSpecs() {
    console.log("ins service get specs");
    return this.httpService.get<Rawspecs>("http://localhost:5555/getAllProductSpecs");
    
  }

}
export class Order
{
 orderid:Number;
  name:string;
  rmsid:number;
  supplierid:number;
  quanvalue:number;
  quanunit:string;
 dateoford:any;
 dateofdel:any;
  totalprice:Number;
  deliveryStus:string;
  warehouseid:number;
  userid:number;
  constructor(name:string, rmsid:number, supplierid:number, quanvalue:number, warehouseid:number,orderid:number,quanunit:string ,dateoford:any,
    dateofdel:any,
     totalprice:Number,
     deliveryStus:string, userid:number){
    this.name = name;
    this.rmsid = rmsid;
    this.supplierid = supplierid;
    this.quanvalue = quanvalue;
    this.warehouseid = warehouseid;
    this.dateoford=dateoford;
   this. dateofdel=dateofdel;
   this.orderid=orderid
    this.totalprice=totalprice;
     this.deliveryStus=deliveryStus;
     this.quanunit=quanunit;
  }
 
}
export class Rawspecs
{
 rmsid:Number;
 rmname:string;
 pricePerUnit:Number;
 expirydat:string;
 manudate:string;
} 
export class Productspecs
{
 pid:Number;
 pname:string;
 pricePerUnit:Number;
 expirydat:string;
 manudate:string;
} 

export class supplier{
  supplierid:Number;
  name:string;
  address:string;
  phonenum:Number;
}
export class warehouse{
  warehouseid:Number;
  name:string;
  address:string;
  phonenum:Number;
}
export class User{
  userid:number;
 uname:string;
  upass:string;
}
export class OrderProduct
{
  orderid:Number;
  name:string;
  pid:number;
  supplierid:number;
  quanvalue:number;
  quanunit:string;
 dateoford:any;
 dateofdel:any;
  totalprice:Number;
  deliveryStus:string;
  warehouseid:number;
  userid:number;
  constructor(name:string, pid:number, supplierid:number, quanvalue:number, warehouseid:number,orderid:number,quanunit:string ,dateoford:any,
    dateofdel:any,
     totalprice:number,
     deliveryStus:string, userid:number){
    this.name = name;
    this.pid = pid;
    this.supplierid = supplierid;
    this.quanvalue = quanvalue;
    this.warehouseid = warehouseid;
    this.dateoford=dateoford;
   this. dateofdel=dateofdel;
   this.orderid=orderid
    this.totalprice=totalprice;
     this.deliveryStus=deliveryStus;
     this.quanunit=quanunit;
}
}