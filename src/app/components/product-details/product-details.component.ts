import { CartItem } from './../../common/cart-item';
import { CartService } from './../../services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../services/product-service.service';
import { Product } from './../../common/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:Product=new Product();
  constructor(private cartService:CartService,private productService:ProductService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(()=>{
      this.getProductDetails();
    });
  }

  getProductDetails(){
    const productId:number =+this.route.snapshot.paramMap.get('id');
     
    this.productService.getProduct(productId).subscribe(data=>{
      this.product=data;
    });

  }

  addToCart(product:Product)
  {
    const theCartItem=new CartItem(product)
    this.cartService.addToCart(theCartItem);
  }

}
