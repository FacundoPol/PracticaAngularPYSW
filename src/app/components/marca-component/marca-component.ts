import { Component } from '@angular/core';
import { MarcaService } from '../../services/marca-service';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marca-component',
  imports: [CommonModule],
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

}
