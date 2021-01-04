import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';

import { Product } from '../../common/product';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product-service.service';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.css']
})
export class ShopHomeComponent implements OnInit {

  
  products: Product[];
  currentCategoryId: number;
  searchMode: boolean = false;
 
  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {
    this.searchMode = this.route.snapshot.paramMap.has("keyword");
    if (this.searchMode) {
      this.handleSearchListProduct();
    } else {
      this.handleListProduct();
    }
  }


  handleSearchListProduct() {
    const keyword = this.route.snapshot.paramMap.get("keyword");
    this.productService.searchProducts(keyword).subscribe(data => {
      this.products = data;
    });
  }

  handleListProduct() {

    const hasCategoryId: boolean = this.route.snapshot.paramMap.has("id");
    if (hasCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get("id");
    } else {
      this.currentCategoryId = 1;
    }

    this.productService
      .getProductList(this.currentCategoryId)
      .subscribe(data => {
        this.products = data;
      });
  }

  addToCart(product: Product) {
    const theCartItem = new CartItem(product);
    this.cartService.addToCart(theCartItem);
  }

}
