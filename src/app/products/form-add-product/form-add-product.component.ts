import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-add-product',
  templateUrl: './form-add-product.component.html',
  styleUrls: ['./form-add-product.component.css']
})
export class FormAddProductComponent {
  formProduct: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formProduct = this.formBuilder.group({
      nameProduct: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  onAddProduct() {
    if (this.formProduct.valid) {
      // Obtén los productos ya almacenados en el localStorage
      const existingProducts = localStorage.getItem('products');
      let productsArray = existingProducts ? JSON.parse(existingProducts) : [];

      // Agrega el nuevo producto al array
      productsArray.push(this.formProduct.value);

      // Guarda el array actualizado en localStorage
      localStorage.setItem('products', JSON.stringify(productsArray));

      alert("Producto agregado exitosamente");
      this.router.navigate(['/main']);  // Redirige a la lista de productos
    }
  }
}
