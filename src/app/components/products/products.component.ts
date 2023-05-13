import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productList: { id: number; productName: string }[] = [];

  constructor() {
    this.productList = [
      { id: 1, productName: 'p1' },
      { id: 2, productName: 'p1' },
      { id: 3, productName: 'p1' },
    ];
  }

  ngOnInit(): void {}
}
