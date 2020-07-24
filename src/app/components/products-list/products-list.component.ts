import { ProductService } from './../../services/product-service.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products:Product[]
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productList()
  }

  productList(){
    this.productService.getProductList().subscribe(data=>{
      this.products=data;
    });
  }
}
