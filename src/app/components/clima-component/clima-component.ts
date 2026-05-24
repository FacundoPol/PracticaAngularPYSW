import { CommonModule } from '@angular/common';
import { Component, StreamingResourceOptions } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClimaService } from '../../services/clima-service';

@Component({
  selector: 'app-clima-component',
  imports: [CommonModule,FormsModule],
  templateUrl: './clima-component.html',
  styleUrl: './clima-component.css',
})
export class ClimaComponent {

  ciudades = [
  'New York',
  'London',
  'Paris',
  'Tokyo',
  'Madrid',
  'Rome',
  'Berlin',
  'Moscow',
  'Beijing',
  'Shanghai',
  'Dubai',
  'Los Angeles',
  'Mexico City',
  'Buenos Aires',
  'Rio de Janeiro',
  'Sao Paulo',
  'Sydney',
  'Toronto',
  'Chicago',
  'Miami',
  'Bangkok',
  'Seoul',
  'Hong Kong',
  'Singapore',
  'Istanbul',
  'Amsterdam',
  'Barcelona',
  'Lisbon',
  'Athens',
  'Cairo',
  'Johannesburg',
  'Mumbai',
  'Delhi',
  'Lima',
  'Santiago',
  'Bogota',
  'Caracas',
  'Montevideo',
  'San Salvador de Jujuy',
  'Las Vegas'
];

  constructor(private climaService:ClimaService){
  }

  resultado: any = {}
  ciudad : string = ""
  unidad : boolean = false

  obtenerTemperatura()
  {
    this.climaService.getClima(this.ciudad).subscribe(
      (result:any) => {
        // console.log(result)
        this.resultado = result.main
      },
      (error:any) => {
        console.log(error)
      }
    )
  }

}
