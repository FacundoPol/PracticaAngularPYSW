import { Component } from '@angular/core';
import { PracticaParcialService } from '../../servicios/practica-parcial-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-practica-parcial-component',
  imports: [CommonModule,FormsModule],
  templateUrl: './practica-parcial-component.html',
  styleUrl: './practica-parcial-component.css',
})
export class PracticaParcialComponent {

constructor(private practicaParcialService:PracticaParcialService){
}

  mostrarTabla:boolean = false
  anio:string = ""
  carreras: Array<any> = []
  sesiones: Array <any> = []
  constructores: Array<any> = []

  obtenerCarrera(){
    this.mostrarTabla=true
      this.practicaParcialService.getCarreras(this.anio).subscribe(
        (result:any) => {
          this.carreras = result.results
        },
        (error:any) => {
          console.log(error)
        }
      )
  }


  obtenerSesion(id_sesion:string){
    this.practicaParcialService.getSesiones(id_sesion).subscribe(
      (result:any) => {
        console.log(result.results.drivers)
        this.sesiones = result.results.drivers
        },
        (error:any) => {
          console.log(error)
        })
  }

  obtenerConstructores(){
    this.practicaParcialService.getConstructores(this.anio).subscribe(
      (result:any) => {
        // console.log(result)
        this.constructores = result.results
      },
      (error:any) => {
        console.log(error)
      })
  }

}
