import { Component } from '@angular/core';
import { ConversorService } from '../../services/conversor-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversor-component',
  imports: [CommonModule,FormsModule],
  templateUrl: './conversor-component.html',
  styleUrl: './conversor-component.css',
})
export class ConversorComponent {

  constructor(private conversorService:ConversorService){
    this.listarMonedas();
  }

  to:string = ""
  from:string = ""
  amount: string = ""
  objetoMonedas:any={}
  arrayMonedas: Array<any>=[]
  conversion: string = ""
  listarMonedas(){
    this.conversorService.getListaMonedas().subscribe(
      (result:any)=>{
        this.arrayMonedas = Object.entries(result.currencies).map(([codigo, nombre]) => ({codigo,nombre}));
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }

  convertirValor(){
    this.conversorService.getConversion(this.to,this.from,this.amount).subscribe(
      (result:any)=>{
        this.conversion=result.result
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }

}
