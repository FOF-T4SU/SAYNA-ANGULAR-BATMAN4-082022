import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiProductService {
  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get<any>('http://localhost:3000/products').pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  getProductId(id: number) {
    return this.http.get<any>('http://localhost:3000/products/' + id).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
