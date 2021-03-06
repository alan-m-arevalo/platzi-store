import { Component, OnInit } from '@angular/core';

import {ProductsService} from './../products.service';
import {Product} from './../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void
  {
    this.products = this.productsService.getAllProducts();
  }

  clickProduct(id: number): void
  {
    console.log('Product id: ' + id);
  }

}
