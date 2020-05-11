import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Admin} from './admin';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient,private router:Router) { }
admin:Admin;
message:any;
public login(username:string,password:string) :any
{
this.admin=new Admin(username,password);
//sessionStorage.setItem("logged_in",username);
return this.http.put<any>("http://localhost:8015/admin/login",this.admin);




}
public forgot(username:string,password:string) :any
{
  this.admin=new Admin(username,password);
  return this.http.put<any>("http://localhost:8015/admin/forgot",this.admin);


}
public logout()
{

sessionStorage.clear();

this.router.navigate(['/login']);
}

}
