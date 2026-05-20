import { Component } from '@angular/core';
import { Traductor } from '../../servicios/traductor';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-traductor-component',
  imports: [FormsModule,CommonModule],
  templateUrl: './traductor-component.html',
  styleUrl: './traductor-component.css',
})
export class TraductorComponent {
  from: string = ""
  to: string = "";
  text: string = "";
  result: string = "";

  lenguajes: Array<any> = []

  
  
  constructor(private traductorService: Traductor){
    this.obtenerLenguajes();
  }

  obtenerLenguajes(){
    this.traductorService.obtenerLenguaje().subscribe(
      (result: any) =>{
        this.lenguajes = result;
      },
      (error: any) =>{
        console.log(error);
      }
      )
  }

  enviarLenguaje(){
    console.log("entro en enviar lenguaje ...")
    this.traductorService.enviarLenguaje(this.from,this.to,this.text).subscribe(
      (result: any) =>{
        this.result = result.trans;
        console.log(result);
      },
      (error: any) =>{
        console.log(error);
      }
    )
  }

}
