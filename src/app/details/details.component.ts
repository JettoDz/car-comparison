import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FetcherService } from '../fetcher.service';
import { Car } from '../car';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <img class="listing-photo" [src]="car?.photo"
        alt="Exterior photo of {{car?.model}}"/>
      <section class="listing-description">
        <h2 class="listing-heading">{{car?.model}}</h2>
        <p class="listing-location"></p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">Acerca del vehiculo</h2>
        <ul>
          <li>Marca: {{car?.make}}</li>
          <li>Precio inicial: {{car?.price}}</li>
        </ul>
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
    let id = Number(this.route.snapshot.params['id'])
    this.car = this.fetcher.getCarById(id)
  }
}
