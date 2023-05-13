import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(private x: ProductService) {
    this.products = this.x.getAllProducts().subscribe({
      next: (response) => {
        this.products = response;
      },
      error: (myError) => {
        console.log(myError);
      },
    });
  }

  ngOnInit(): void {}

  deleteProductHandler(productId: number) {
    this.x.deleteProduct(productId).subscribe({
      next: (response) => {
        this.products = this.products.filter(
          (product: any) => product.id != productId
        );
      },
    });
  }
}
