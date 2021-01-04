import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from '../../common/cart-item';
import { Product } from '../../common/product';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product-service.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
