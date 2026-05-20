import { Routes } from '@angular/router';
import { MovieComponent } from './components/movie-component/movie-component';
import { MarcaComponent } from './components/marca-component/marca-component';

export const routes: Routes = [
    { path: 'movies', component: MovieComponent },
    { path: 'marcas', component: MarcaComponent }
];
