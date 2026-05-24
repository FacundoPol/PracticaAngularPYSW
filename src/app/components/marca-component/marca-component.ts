import { Component } from '@angular/core';
import { MarcaService } from '../../services/marca-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-marca-component',
  imports: [CommonModule,FormsModule],
  templateUrl: './marca-component.html',
  styleUrl: './marca-component.css',
})
export class MarcaComponent {
  constructor(private marcaService:MarcaService){
    this.obtenerMarcas();
  }

  listaMarcas: Array<any> = []

  obtenerMarcas(){
    this.marcaService.getMarcas().subscribe(
      (result:any)=>{
        this.listaMarcas = result
      },
      (error:any)=>{
        console.log(error)
      }
      )
  }

  listaModelos: Array<any> = []


  obtenerModelos(marcaId:string){
    this.marcaService.getModelos(marcaId).subscribe(
      (result:any)=>{
        this.listaModelos= result
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }

}
