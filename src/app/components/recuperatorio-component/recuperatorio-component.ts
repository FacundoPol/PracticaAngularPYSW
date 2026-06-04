import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecuperatorioService } from '../../services/recuperatorio-service';

@Component({
  selector: 'app-recuperatorio-component',
  imports: [CommonModule,FormsModule],
  templateUrl: './recuperatorio-component.html',
  styleUrl: './recuperatorio-component.css',
})
export class RecuperatorioComponent {

  constructor(private recuperatorioService:RecuperatorioService){
    this.funcionGet3()
  }

  arreglocodes : Array<any> = []
  arreglo : Array<any> = []
  anio : string = ""
  code : string = ""
  obj : any = {}

  cc : string = ""

  funcionGet(){
    this.recuperatorioService.get(this.code,this.anio).subscribe(
      (result:any) => {
        // console.log(result)
        this.arreglo = result
      },
      (error:any) => {
        console.log(error)
      }
    )
  }

  funcionGet2(){
    this.recuperatorioService.get2(this.code).subscribe(
      (result:any) => {
        // console.log(result)
        this.obj = result.data
      },
      (error:any) => {
        console.log(error)
      }
    )
  }

funcionGet3(){
    this.recuperatorioService.get3().subscribe(
      (result:any) => {
        // console.log(result)
        this.arreglocodes = result
      },
      (error:any) => {
        console.log(error)
      }
    )
  }
  // funcionPost(){
  //   this.recuperatorioService.post(this.texto2).subscribe(
  //     (result:any) => {
  //       console.log(result)
  //     },
  //     (error:any) => {
  //       console.log(error)
  //     }
  //   )
  // }

}
