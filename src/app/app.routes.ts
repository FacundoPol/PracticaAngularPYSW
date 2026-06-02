import { Routes } from '@angular/router';
import { MovieComponent } from './components/movie-component/movie-component';
import { MarcaComponent } from './components/marca-component/marca-component';
import { ConversorComponent } from './components/conversor-component/conversor-component';
import { ConversorAudioComponent } from './components/conversor-audio-component/conversor-audio-component';
import { ClimaComponent } from './components/clima-component/clima-component';
import { QrComponent } from './components/qr-component/qr-component';
import { ParcialComponent } from './components/parcial-component/parcial-component';
import { PruebaComponent } from './secundario/comp/prueba-component/prueba-component';
import { Simulacro2Component } from './secundario/comp/simulacro2-component/simulacro2-component';

export const routes: Routes = [
    { path: 'movies', component: MovieComponent },
    { path: 'marcas', component: MarcaComponent },
    { path: 'conversor', component: ConversorComponent },
    { path: 'audio', component: ConversorAudioComponent },
    { path: 'clima', component:ClimaComponent },
    { path: 'qr', component: QrComponent},
    { path: 'parcial', component: ParcialComponent},
    { path: 'prueba', component: PruebaComponent},
    { path: 'simulacro2', component: Simulacro2Component}
];
