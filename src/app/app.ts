import { Component, signal } from '@angular/core';
import { TraductorComponent } from './components/traductor-component/traductor-component';
import { PracticaParcialComponent } from './components/practica-parcial-component/practica-parcial-component';

@Component({
  selector: 'app-root',
  imports: [PracticaParcialComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}
