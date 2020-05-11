import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin/admin.service';
import {Router} from '@angular/router';
import {MyserviceService,User} from '../myservice.service';
@Component({
  selector: 'app-login',
  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
message:string;
admin:boolean;
check:boolean=false;
response: User;
login: boolean;
  constructor(private adminservice:AdminService,private router:Router,private service:MyserviceService) { }

  ngOnInit(): void {
  }

  dologin(data)
  {

this.adminservice.login(data.username,data.password).subscribe((data)=>{
console.log(data);
},(error)=>{
if(error.error.text=="success")
{
sessionStorage.setItem("username",data.username);
this.router.navigate(['']);
}
else{


this.message=`<center>Username or password is incorrect. Please Try again</center>`;

}




});
  }
  
  onSubmit(details:any)
  {
 console.log(details)
 if(details.userid>0 && details.pswd)
 {
  this.service.validate(details.userid,details.pswd).subscribe((data)=>{this.response=data
    if(this.response!=null)
    {
      alert("successfully loggedin")
      this.login=false;
    this.check=true;
    this.admin=false;
    this.service.allCkeck(details.userid);
    }
    else{
      alert("Not a valid user")
    }
    })
 }
 else 
   alert("enter all details")
 
  }
  dat1(data){
    this.response=data
    if(this.response[0]!=null)
{
  console.log("hello"+this.response)
  this.router.navigate(['/main']);
}
else{
  alert("enter valid user name password");
}
   }
   loginCheck()
   {
    this.login=true;
   
    this.admin=false;

   }
   adminCheck()
   {
     this.login=false;
     this.admin=true;
   }

}
 