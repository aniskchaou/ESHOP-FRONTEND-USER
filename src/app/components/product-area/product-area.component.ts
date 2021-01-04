import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-area',
  templateUrl: './product-area.component.html',
  styleUrls: ['./product-area.component.css']
})
export class ProductAreaComponent implements OnInit {

 

  ngOnInit() {
  }

  router: string;

  constructor(_router: Router){

          this.router = _router.url; 
          console.log(this.router);
    }

}
