import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RawMaterialStockComponent } from './rawmaterialstock.component';
import { RawMaterialStockService } from './rawmaterialstock.service';

@NgModule({
  declarations: [
    RawMaterialStockComponent
  ],
  imports: [
    HttpClientModule, FormsModule , CommonModule ],
  
   providers: [ RawMaterialStockService ],
 
   exports: [  RawMaterialStockComponent  ]
})
export class RawMaterialStockModule
{
}