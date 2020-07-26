import { Category } from './../../common/category';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service.service';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {

  categories:Category[]
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.listProductCategories();
  }
  listProductCategories(): any {
   this.productService.getCategories().subscribe(data=>{
      this.categories=data;
      console.log(data);
   });
  }

}
