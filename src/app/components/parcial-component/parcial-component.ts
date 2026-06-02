import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ParcialService } from '../../services/parcial-service';

@Component({
  selector: 'app-parcial-component',
  imports: [FormsModule,CommonModule],
  templateUrl: './parcial-component.html',
  styleUrl: './parcial-component.css',
})
export class ParcialComponent {

    constructor(private parcialService : ParcialService){
    }


    comida : string = ""
    recetas : Array<any> = []

    resultado : string = ""

    buscarReceta(){
      this.parcialService.getRecetaid(this.comida).subscribe(
        (result:any) => {
          this.recetas = result
          // console.log(result)
        },
        (error:any) => {
          console.log(error)
        }
      )

    }

    
    traducir(receta:string){
      this.parcialService.getTraduccion(receta).subscribe(
        (result:any) => {
          // console.log(result)
          this.resultado = result.data.translations.translatedText[0]
        },
        (error:any) => {
          console.log(error)
        }
      )
    }



}
