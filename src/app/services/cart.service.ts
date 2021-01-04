import { CartItem } from "./../common/cart-item";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})


export class CartService {
  
  cartItem: CartItem[] = [];
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();
 
 
  constructor() {}

  addToCart(theCartItem: CartItem) {
    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem = undefined;

    if (this.cartItem.length > 0) {
      for (let tempCart of this.cartItem) {
        if (tempCart.id === theCartItem.id) {
          existingCartItem = tempCart;
          break;
        }
      }
      alreadyExistsInCart = existingCartItem != undefined;
    }

    if (alreadyExistsInCart) {
      existingCartItem.quantity++;
    } else {
      this.cartItem.push(theCartItem);
    }

    this.computeCartTotal();
  }


  removeToCart(theCartItem: any) {
    theCartItem.quantity--;
    if (theCartItem.quantity == 0) {
      this.remove(theCartItem);
    } else {
      this.computeCartTotal();
    }
  }


  remove(theCartItem: any): any {
    const index = this.cartItem.findIndex(
      tempcart => tempcart.id === theCartItem.id
    );
    if (index > -1) {
      this.cartItem.splice(index, 1);
      this.computeCartTotal();
    }
  }

  
  computeCartTotal() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let currentCartItem of this.cartItem) {
      totalPriceValue =
        totalPriceValue + currentCartItem.quantity * currentCartItem.unitPrice;
      totalQuantityValue = totalQuantityValue + currentCartItem.quantity;

    }

    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    console.log(this.totalQuantity);
  }
}
