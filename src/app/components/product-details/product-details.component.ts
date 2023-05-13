import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  product: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.productService.getProductById(this.productId).subscribe({
      next: (response) => {
        this.product = response;
      },
    });
  }
}
