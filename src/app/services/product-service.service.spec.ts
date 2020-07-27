import { Product } from './../common/product';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from "@angular/common/http/testing";
import { ProductService } from './product-service.service';

describe('ProductServiceService', () => {

  let service: ProductService
  let httpMock:HttpTestingController

  service = TestBed.get(ProductService)
  httpMock=TestBed.get(HttpTestingController)


  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [ProductService]
  })
  );

  afterEach(()=>{
    httpMock.verify()
  })

  it('should retrieve products', () => {

    const products:Product[] = [{
      id: 1,
      sku: "",
      name: "string",
      description: "string",
      unitPrice: 12.0,
      imageUrl: "string",
      active: true,
      unitsInStock: 1,
      dateCreated: new Date(),
      dateUpdated: new Date()
    }, {
      id: 1,
      sku: "",
      name: "string",
      description: "string",
      unitPrice: 12.77,
      imageUrl: "string",
      active: true,
      unitsInStock: 1,
      dateCreated: new Date(),
      dateUpdated: new Date()
    }]

    //test service
    service.searchProducts("string").subscribe(p=>{
      expect(p.length).toBe(2)
      expect(p).toEqual(products)
    })
    
    //mock
      const request=httpMock.expectOne("https://e-commerce-springboot-backend.herokuapp.com/products/search/findByName?name=string")
     expect(request.request.method).toBe("GET")
     request.flush(products)
    });
});
