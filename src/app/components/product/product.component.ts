import { Component, OnInit } from '@angular/core';
import { ApiProductService } from 'src/app/services/api-product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public products: any;

  p: number = 1;

  constructor(private api: ApiProductService) {}

  ngOnInit(): void {
    this.api.getProduct().subscribe((response: any) => {
      this.products = response;
    });
  }
}
