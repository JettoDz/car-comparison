import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarCardComponent } from '../car-card/car-card.component';
import { Car } from '../car';
import { FetcherService } from '../fetcher.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CarCardComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by maker" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-car-card *ngFor="let car of filteredCars" 
        [car]="car">
      </app-car-card>
    </section>
  `,
  standalone: true,
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  readonly photoUrl = 'https://angular.io/assets/images/tutorials/faa/example-house.jpg';

  cars: Car[] = []
  filteredCars: Car[] = []
  fetcher: FetcherService = inject(FetcherService)

  constructor() {

    this.fetcher.getAll().then(data => {
      this.cars = data
      this.cars.forEach(car => {
        car.minPrice = () => Math.min(...(car.trims.map(trim => trim.starting_price)))
        car.photo = this.photoUrl
      })
      this.filteredCars = this.cars
    })
  }

  filterResults(value: String) {
    if(!value) {
      this.filteredCars = this.cars;
    }
    this.filteredCars = this.cars.filter(car => 
      car?.make.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
  }

}
