import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private dataUrl = 'api/products/product.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    // we're gonna add some exception handling methods via Obs.operators in pipe
    return this.http.get<IProduct[]>(this.dataUrl).pipe(
      tap(data => console.log('The fetched data: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProductById(id: number) {
    return this.getProducts().pipe(
      map((products: IProduct[]) =>
        products.find(product => product.productId === id)
      )
    );
  }

  private handleError(err: HttpErrorResponse) {
    const errorMsg =
      err.error instanceof ErrorEvent
        ? `A clientSide/Network error: ${err.message}`
        : `A backend problem: ${err.status}, error message is: ${err.message}`;
    // normally we send the error to a logging server(instead of showing it on the console)
    console.error(errorMsg);
    return throwError(errorMsg); // create an observable that emits only an error to the subscribers
  }
}
