import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FetcherService } from '../fetcher.service';
import { Car } from '../car';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, TabsComponent],
  template: `
    <article>
      <img class="listing-photo" [src]="car?.photo"
        alt="Exterior photo of {{car?.model}}"/>
      <section class="listing-description">
        <p class="listing-heading">{{car?.make}} {{car?.model}}</p>
        <p class="listing-location">Modelo: {{car?.year}}</p>
      </section>
      <section class="listing-features">
        <h4 class="section-heading">Acerca del vehiculo</h4>
        <app-tabs [trimsArray]="car?.trims"></app-tabs>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  fetcher: FetcherService = inject(FetcherService)
  car: Car | undefined;
  constructor() {
    let id = this.route.snapshot.params['id']
    this.fetcher.getCarById2(id).then(car => {
      this.car = car
      this.car.minPrice = () => Math.min(...(car.trims.map(trim => trim.starting_price)))
      this.car.photo = 'https://angular.io/assets/images/tutorials/faa/example-house.jpg'
    })
  }
  
}
