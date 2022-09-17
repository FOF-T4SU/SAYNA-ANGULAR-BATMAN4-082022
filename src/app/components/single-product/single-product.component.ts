import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiProductService } from 'src/app/services/api-product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit {
  product!: any;
  // productId!: number;

  constructor(
    private api: ApiProductService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const productId = +this.route.snapshot.params['id'];
    this.api.getProductId(productId).subscribe((response: any) => {
      this.product = response;
      console.log(this.product);
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.router.navigateByUrl('/cart');
  }
}
