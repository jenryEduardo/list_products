import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import { FormAddProductComponent } from './form-add-product/form-add-product.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListProductsComponent,
    FormAddProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    ListProductsComponent,
    FormAddProductComponent
  ]
})
export class ProductsModule { }
