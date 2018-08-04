import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';
@Component({
  // we don't need the selector, we're gonna show it via routing
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  title = 'Details of';
  product: IProduct;
  errorMsg = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  onBack(): void {
    // to navigate using code(not a template's action based on the "routerLink" directive)
    this.router.navigate(['/products']);
  }

  ngOnInit() {
    const prId = +this.route.snapshot.paramMap.get('id');
    this.title += ` product : ${prId}`;
    // get the appropriate product
    this.productService
      .getProductById(prId)
      .subscribe(
        product => (this.product = product),
        error => (this.errorMsg = error as any)
      );
  }
}
