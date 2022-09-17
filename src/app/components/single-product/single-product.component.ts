import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiProductService } from 'src/app/services/api-product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit {
  product!: any;
  productId!: number;

  constructor(private api: ApiProductService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const productId = +this.route.snapshot.params['id'];
    this.api.getProductId(this.productId).subscribe((response: any) => {
      this.product = response;
    });
  }
}
