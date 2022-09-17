import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiProductService } from 'src/app/services/api-product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public products: any;

  p: number = 1;

  constructor(
    private api: ApiProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.api.getProducts().subscribe((response: any) => {
      this.products = response;
      this.products.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.prix });
      });
    });
  }

  addToCart(productItem: any) {
    this.cartService.addToCart(productItem);
    this.router.navigateByUrl('/cart');
  }
}
