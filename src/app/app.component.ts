import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <a [routerLink]="['/']">
        <header >
          <img src="/assets/logo.svg" alt="logo" aria-hidden="true">
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
      <footer>
        <div class="disclaimer">
          Esta pagina es puramente ilustrativa. Todas las imagenes, logotipos e informacion pertenecen a
          sus respectivas marcas y firmas. Esta pagina no usa trackers, anuncios ni ningun tipo de 
          telemetria que permita generar ingresos.
        </div>
      </footer>
    </main>
  `,
  standalone: true,
  imports: [HomeComponent, RouterModule],
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'car-comparison';
}
