import { Injectable } from '@angular/core';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class FetcherService {

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  cars: Car[] = [
    {
      _id: '1',
      make: 'Mazda',
      model: 'CX-5',
      year: 999,
      trims: [],
      minPrice: () => 10,
      photo: `${this.baseUrl}/example-house.jpg`
    },
    {
      _id: '2',
      make: 'Toyota',
      model: 'RAV4',
      year: 999,
      trims: [],
      minPrice: () => 10,
      photo: `${this.baseUrl}/example-house.jpg`
    },
    {
      _id: '3',
      make: 'Ford',
      model: 'Territory',
      year: 999,
      trims: [],
      minPrice: () => 10,
      photo: `${this.baseUrl}/example-house.jpg`
    },
    {
      _id: '4',
      make: 'Hyundai',
      model: 'Creta',
      year: 999,
      trims: [],
      minPrice: () => 10,
      photo: `${this.baseUrl}/example-house.jpg`
    }
  ];

  constructor() { }

  async getAll(): Promise<Car[]> {
    return (await fetch('http://localhost:3000/v1/all', {mode: 'cors'})).json() ?? []
  }

  getCarById(id: string): Car | undefined {
    return this.cars.find(car => car._id === id);
  }

  async getCarById2(id: String): Promise<Car> {
    return (await fetch(`http://localhost:3000/v1/details/${id}`, {mode: 'cors'})).json() ?? {}
  }

}
