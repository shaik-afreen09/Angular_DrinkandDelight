import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {AdminComponent} from './admin.component';
import {AdminService} from './admin.service';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    HttpClientModule, FormsModule , CommonModule ],
  
    providers: [AdminService  ],
  
    exports: [AdminComponent  ]
})
export class AdminModule { }
