import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Principal } from './components/principal/principal';
import { TraductorComponent } from './components/traductor-component/traductor-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TraductorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}
