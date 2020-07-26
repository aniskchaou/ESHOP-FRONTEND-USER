import { Component } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ecommerce-angular';
}
