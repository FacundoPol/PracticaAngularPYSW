import { Component, signal } from '@angular/core';
import { TraductorComponent } from './components/traductor-component/traductor-component';

@Component({
  selector: 'app-root',
  imports: [TraductorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}
