import {CommonModule} from "@angular/common";
import {HousingLocationComponent} from "../housing-location/housing-location.component";
import {Component, inject} from '@angular/core';
import {HousingService} from '../housing.service';
import {HousingLocation} from "../housinglocation";
import {ProductListComponent} from "../product-list/product-list.component";
import {Product} from "../product";
import {AuthService} from "../auth.service";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, ProductListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  housingService: HousingService = inject(HousingService);
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];
  productList: Product[] = [];
  authService: AuthService = inject(AuthService);

  login() {
    this.authService.isAuthenticated = true;
  }
  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });

  }
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
