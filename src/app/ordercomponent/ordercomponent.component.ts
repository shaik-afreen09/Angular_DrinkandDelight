import { Component, OnInit } from '@angular/core';
import { MyserviceService, Rawspecs, supplier, warehouse, Order } from '../myservice.service';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-ordercomponent',
  templateUrl: './ordercomponent.component.html',
  styleUrls: ['./ordercomponent.component.css']
})
export class OrdercomponentComponent implements OnInit {
  warehouseid:number;
  supid:number;
  quanvalue:number;
  rmsid:number;
  rmname:string;
  selected:number=1;
  selected1:number=0;
  selected2:number=1;
  router: Router;
  service: MyserviceService;
  spec:Rawspecs[]=[];
  check:boolean=false;
  sup: supplier[]=[];
  war: warehouse[]=[];
  serorder:Order;
 // creating object
 order1:Order = new Order("", 0,0,0, 0,0,"" ,"",
  "",
  0,
   "", 0)
   max1:number=4
  message: Object;
  price_p_u: any;
  check4: boolean=false;
  message1: string;
  quantity_p_u: any;
  speccheck: boolean;
  warecheck: boolean;
  supcheck: boolean;
  warename: string;
  supname: string;
  serorder1: Object;
  orderid: Number;
  total: number;
  totcon: number;
  confirmcheck: boolean;
  allcheck: boolean;
  userid: number;

  constructor(service:MyserviceService, router:  Router) {
    this.service=service;
    this.router=router;
   }

  ngOnInit(): void {
    this.service.getSpecs().subscribe(response => this.handleSuccessfulResponse(response))
    this.service.getsup().subscribe(data=>this.dat1(data))
    this.service.getware().subscribe(data=>this.dat2(data))
    this.allcheck=this.service.allchec;
    this.userid=this.service.userid
  }

  onSubmit()
  {
    console.log(this.quanvalue)
      if(this.speccheck==true && this.supcheck==true&&this.warecheck==true &&this.quanvalue>0)
      {

      this.order1.userid=this.userid
      this.order1.rmsid=this.selected
      this.order1.quanvalue=this.quanvalue
      this.order1.supplierid=this.selected2
      this.order1.warehouseid=this.selected1
      this.order1.totalprice=this.quantity_p_u*this.quanvalue
      this.total=this.quantity_p_u*this.quanvalue
      this.order1.name=this.rmname
      console.log(this.order1)
      
     this.service.addEmp(this.order1).subscribe((data)=>{this.serorder=data
      if(this.serorder.orderid>0)
      {
       console.log(this.serorder)
        alert("Ordered Successfully")
        this.check4=true
        this.orderid=this.serorder.orderid
      }
    }
     
     )
    
     console.log(this.serorder)
    // this.router.navigate(['list'])
      }
     else
     {
       alert("enter All fields")
     }
  }
  onOptionsSelected(value:string){
    console.log("the selected value is " + value+this.spec.length);
    let i:number;
    if(this.quanvalue>0)
    {
    for(i=0;i<this.spec.length;i++)
    {
     if(this.spec[i].rmsid==this.selected)
      {
             this.quantity_p_u=this.spec[i].pricePerUnit
             this.rmname=this.spec[i].rmname
             this.totcon=this.quanvalue*this.quantity_p_u
             this.message=this.quantity_p_u
             this.check=false
      }
    }
    if(this.speccheck==true && this.supcheck==true&&this.warecheck==true &&this.quanvalue>0)
    {
      this.confirmcheck=true;
    }
  }
  else
      alert("Quantity should be minimum 1")

}
  ////////////////////getting initial values
  handleSuccessfulResponse(response) {
    this.spec = response;
    this.check=true;
  }
  
  dat1(data){
   this.sup=data
  }
  dat2(data){
    this.war=data
   }
   //emptycheck
   emptyCheckSpec()
   {
       this.speccheck=true;
   }
   emptyCheckWare()
   {
   this.warecheck=true;
   let i:number;
   for(i=0;i<this.war.length;i++)
   {
     if(this.war[i].warehouseid==this.selected1)
     {
       this.warename=this.war[i].name
     }
   }
   }
   emptyCheck1Sup()
   {
   this.supcheck=true;
   let i:number;
   for(i=0;i<this.sup.length;i++)
   {
     if(this.sup[i].supplierid==this.selected2)
     {
       console.log(this.sup[i].name)
       this.supname=this.sup[i].name
     }
   }
   }
}
