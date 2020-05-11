import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductStockComponent } from './productstock/productstock.component';
import { RawMaterialStockComponent } from './rawmaterialstock/rawmaterialstock.component';
import { ProductTrackComponent } from './product-track/product-track.component';
import { RawmaterialTrackComponent } from './rawmaterial-track/rawmaterial-track.component';
import {  RawmaterialProcessDateComponent } from './rawmaterial-process-date/rawmaterial-process-date.component';
import {RawmaterialUpdateComponent} from './rawmaterial-update/rawmaterial-update.component';

//import { ProductTrackComponent } from './rawmaterial-track/rawmaterial-track.component';
import {  ProductExitDateComponent } from './product-exit-date/product-exit-date.component';
import { ProductUpdateComponent} from './product-update/product-update.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ForgotComponent} from './forgot/forgot.component';
import {HomeComponent} from './home/home.component'
import { OrdercomponentComponent } from './ordercomponent/ordercomponent.component';
import { FetchOrdersComponent } from './fetch-orders/fetch-orders.component';
import { OrderProductComponent } from './order-product/order-product.component';
import { FetchProductOrdersComponent } from './fetch-product-orders/fetch-product-orders.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent,

   children: [
  { path:'productstock', component:ProductStockComponent },
  { path:'rawmaterialstock', component:RawMaterialStockComponent },
{ path:'productTrack', component:ProductTrackComponent},
{ path:'rawmaterialTrack', component:RawmaterialTrackComponent},
{path : 'rawmaterialprocessdate',component:RawmaterialProcessDateComponent},
{path : 'rawmaterialupdate',component:RawmaterialUpdateComponent},
{path :'productexitdate',component:ProductExitDateComponent},
{path : 'productupdate',component:ProductUpdateComponent},

    ]
  },
  {
    path:'forgot',component:ForgotComponent
  },
{
 path:'login',component:LoginComponent ,

},
{path:'add',component:OrdercomponentComponent},
  {path:'list',component:FetchOrdersComponent},
  {path:'addproductorder',component:OrderProductComponent},
  {path:'listproduct',component:FetchProductOrdersComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
