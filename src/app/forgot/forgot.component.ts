import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AdminService} from '../admin/admin.service';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
message:string;
  constructor(private router:Router,private adminservice:AdminService) { }

  ngOnInit(): void {
  }
requestdata(data)
{
this.adminservice.forgot(data.username,data.forgotpassword).subscribe((data)=>{
  console.log(data);
},(error)=>{
console.log(error);
if(error.error.text=="Password Updated Successfully")
{
  this.message=`<center> Passsword Changed Successfully </center>`;

  this.router.navigate(['login']);
}
else
this.message=`<center>Username doesnot exist. Could not change password</center>`;
});

}
}
