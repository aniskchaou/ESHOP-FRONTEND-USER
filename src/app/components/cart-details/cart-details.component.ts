import { Product } from './../../common/product';
import { CartService } from './../../services/cart.service';
import { CartItem } from './../../common/cart-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  cartItems:CartItem[]=[]
  totalPrice:number=0
  totalQuantity:number=0


  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.listCartDetails()
  }

  listCartDetails() {
    this.cartItems=this.cartService.cartItem;

    this.cartService.totalPrice.subscribe(data=>{
      this.totalPrice=data
    })

    this.cartService.totalQuantity.subscribe(data=>{
      this.totalQuantity=data
    })

    this.cartService.computeCartTotal()

  }

  incrementQuantity(product:Product)
  {
    const theCartItem=new CartItem(product)
    this.cartService.addToCart(theCartItem);
  }

  decrementQuantity(product:Product)
  {
    this.cartService.removeToCart(product);
  }
}
