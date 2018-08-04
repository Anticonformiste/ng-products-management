import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  // selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'Products List';
  imgWidth = 50;
  imgMargin = 2;
  showImages = false;
  products: IProduct[];
  // implementing the filtering functionality
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filtredProducts = this._listFilter
      ? this.performFilter(this._listFilter)
      : this.products;
  }
  filtredProducts: IProduct[];
  errorMessage: string;

  constructor(private productService: ProductService) {}

  toggleImages(): void {
    this.showImages = !this.showImages;
  }

  performFilter(filter: string): IProduct[] {
    filter = filter.toLocaleLowerCase();
    return this.products.filter(product => {
      return product.productName.toLocaleLowerCase().indexOf(filter) !== -1;
    });
  }

  onRatingClick(msg: string): void {
    this.title = `Products List: (${msg})`;
  }

  // a lifecyle hook
  ngOnInit(): void {
    console.log('We\'re on init');
    this.productService.getProducts().subscribe(
      // the next arrow func
      products => {
        this.products = products;
        // we include it here,because the http calls are async(out,it may execute before response's arrival)
        this.filtredProducts = this.products;
      },
      // the errorHandling func
      error => (this.errorMessage = error as any)
    );
  }
}
