import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  products: any[] = [];
  completedProducts: Set<string> = new Set();

  constructor(private router: Router) {
    this.loadProducts();
  }

  loadProducts() {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      this.products = JSON.parse(storedProducts);
    }
  }

  toggleComplete(productName: string) {
    if (this.completedProducts.has(productName)) {
      this.completedProducts.delete(productName);
    } else {
      this.completedProducts.add(productName);
    }
  }

  isCompleted(productName: string): boolean {
    return this.completedProducts.has(productName);
  }

  addProduct() {
    this.router.navigate(['/add-products']);
  }
}
