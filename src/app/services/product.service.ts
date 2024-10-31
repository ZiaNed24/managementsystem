import { Injectable } from '@angular/core';

export interface Product {
  code: string;
  name: string;
  category: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {}

  getProductsMini(): Promise<Product[]> {
    // Replace with actual data retrieval logic, e.g., from an API
    return Promise.resolve([
      { code: 'P001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P002', name: 'Product 2', category: 'Category 2', quantity: 5 }
    ]);
  }
}
