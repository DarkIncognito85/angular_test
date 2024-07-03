import {Component, inject, Input} from '@angular/core';
import {Product} from "../product";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  authService: AuthService = inject(AuthService);

  @Input() products: Product[] = [
    {
      id: 0,
      name: "test"
    }
  ];

  toggleAuth(){
    this.authService.isAuthenticated = !this.authService.isAuthenticated
  }
}
