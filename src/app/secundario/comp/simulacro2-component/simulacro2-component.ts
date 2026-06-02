import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Simulacro2Service } from '../../serv/simulacro2-service';

@Component({
  selector: 'app-simulacro2-component',
  imports: [CommonModule,FormsModule],
  templateUrl: './simulacro2-component.html',
  styleUrl: './simulacro2-component.css',
})
export class Simulacro2Component {

  constructor(private simulacroService:Simulacro2Service){

  }


  resultados: Array<any> = []
  nombre : string = ""

  obtenerVideo(){
    this.simulacroService.getVideos(this.nombre).subscribe(
      (result:any) => {
        this.resultados = result.contents
        // console.log(result.contents[0])
      },
      (error:any) => {
        console.log(error)
      }
    )
  }


}
