import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public products: any = [];
  public grandTotal!: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((response) => {
      this.products = response;
      this.grandTotal = +this.cartService.getTotalPrice();
    });
  }

  removeItem(productItem: any) {
    if (confirm('Voulez vous continuer?'))
      this.cartService.removeCartItem(productItem);
  }
}
