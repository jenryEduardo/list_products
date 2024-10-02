import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import { FormAddProductComponent } from './form-add-product/form-add-product.component';



@NgModule({
  declarations: [
    ListProductsComponent,
    FormAddProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
