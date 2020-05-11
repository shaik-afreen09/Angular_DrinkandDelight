import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductStockComponent } from './productstock.component';
import { ProductStockService } from './productstock.service';



@NgModule({
  declarations: [
    ProductStockComponent
  ],
  imports: [
    HttpClientModule, FormsModule , CommonModule ],
  
    providers: [ProductStockService  ],
  
    exports: [ProductStockComponent  ]
 })
 export class ProductStockModule
 {
 }