import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-add-product',
  templateUrl: './form-add-product.component.html',
  styleUrl: './form-add-product.component.css'
})
export class FormAddProductComponent {
  formProduct: FormGroup;

  constructor(private FormBuilder:FormBuilder){
    this.formProduct=this.FormBuilder.group({
        nameProduct:['',Validators.required],
        description:['',Validators.required],
        price:['',Validators.required]
    })
  }

  onAddProduct(){
    if(this.formProduct.valid){
      localStorage.setItem('product',JSON.stringify(this.formProduct.value))
      alert("producto agregado")
    }
  }
}
