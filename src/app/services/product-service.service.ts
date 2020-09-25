import { Category } from "./../common/category";
import { Product } from "./../common/product";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: "root"
})


export class ProductService {
  
  private baseUrl =
  "https://e-commerce-springboot-backend.herokuapp.com/products";
  private baseCategoriesUrl =
  "https://e-commerce-springboot-backend.herokuapp.com/categories";

  constructor(private httpClient: HttpClient) {}

  searchProducts(keyword: string): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/findByName?name=${keyword}`;
    
    return this.httpClient
      .get<GetResponseProduct>(searchUrl)
      .pipe(map(response => response._embedded.products));
  }


  getProduct(productId: number): Observable<Product> {
    const url = `${this.baseUrl}/${productId}`;
   
    return this.httpClient.get<Product>(url);
  }

  
  getCategories(): Observable<Category[]> {
   
    return this.httpClient
      .get<GetResponseCategory>(this.baseCategoriesUrl)
      .pipe(map(response => response._embedded.categories));
  }

  getProductList(theCategoryId: number): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.httpClient
      .get<GetResponseProduct>(searchUrl)
      .pipe(map(response => response._embedded.products));
  }
}

interface GetResponseProduct {
  _embedded: {
    products: Product[];
  };
}

interface GetResponseCategory {
  _embedded: {
    categories: Category[];
  };
}
