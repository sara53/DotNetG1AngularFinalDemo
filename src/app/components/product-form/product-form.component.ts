import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  productId: any;
  product: any;
  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  myProductForm = new FormGroup({
    productName: new FormControl(''),
    price: new FormControl(''),
  });
  ngOnInit(): void {
    this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (this.productId != 0) {
      this.productService.getProductById(this.productId).subscribe({
        next: (response) => {
          this.product = response;
          this.myProductForm.controls['productName'].setValue(
            this.product.productName
          );
          this.myProductForm.controls['price'].setValue(this.product.price);
        },
      });
    }
  }
  formOperation(e: Event) {
    e.preventDefault();
    if (this.productId == 0) {
      this.productService.addProduct(this.myProductForm.value).subscribe();
    } else {
      // edit
      this.productService
        .editProduct(this.productId, this.myProductForm.value)
        .subscribe();
    }
    this.router.navigate(['/products']);
  }
}
