import { Injectable } from '@angular/core';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class FetcherService {

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  cars: Car[] = [
    {
      id: 1,
      make: 'Mazda',
      model: 'CX-5',
      price: 580000,
      photo: `${this.baseUrl}/example-house.jpg`
    },
    {
      id: 2,
      make: 'Toyota',
      model: 'RAV4',
      price: 550000,
      photo: `${this.baseUrl}/example-house.jpg`
    },
    {
      id: 3,
      make: 'Ford',
      model: 'Territory',
      price: 515000,
      photo: `${this.baseUrl}/example-house.jpg`
    },
    {
      id: 4,
      make: 'Hyundai',
      model: 'Creta',
      price: 440000,
      photo: `${this.baseUrl}/example-house.jpg`
    }
  ];

  constructor() { }

  getAllCars(): Car[] {
    return this.cars;
  }

  getCarById(id: number): Car | undefined {
    return this.cars.find(car => car.id === id);
  }

}
