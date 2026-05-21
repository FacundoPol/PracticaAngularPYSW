import { Routes } from '@angular/router';
import { MovieComponent } from './components/movie-component/movie-component';
import { MarcaComponent } from './components/marca-component/marca-component';
import { ConversorComponent } from './components/conversor-component/conversor-component';
import { ConversorAudioComponent } from './components/conversor-audio-component/conversor-audio-component';

export const routes: Routes = [
    { path: 'movies', component: MovieComponent },
    { path: 'marcas', component: MarcaComponent },
    { path: 'conversor', component: ConversorComponent },
    { path: 'audio', component: ConversorAudioComponent }
];
