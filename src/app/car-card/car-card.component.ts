import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../car';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
      <section class="listing">
        <img class="listing-photo" [src]="car.photo" alt="Exterior photo of {{car.model}}">
        <h2 class="listing-heading">{{ car.make }}</h2>
        <h3>{{ car.model }} {{car.year}}</h3>
        <p class="listing-location">\${{car.minPrice()}}</p>
        <a [routerLink]="['/details', car._id]">Ver mas</a>
      </section>
    `,
  styleUrls: ['./car-card.component.sass']
})
export class CarCardComponent {
  @Input() car!: Car
}
