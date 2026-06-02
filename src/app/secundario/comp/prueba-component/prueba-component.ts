import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PruebaService } from '../../serv/prueba-service';

@Component({
  selector: 'app-prueba-component',
  imports: [CommonModule,FormsModule],
  templateUrl: './prueba-component.html',
  styleUrl: './prueba-component.css',
})
export class PruebaComponent {

  constructor(private pruebaService:PruebaService){}


  var : string = ""
  array : Array<any> = []
  obj : any = {}


  // FUNCION get NORMAL

  // funcion1(){
  //   this.pruebaService.get().subscribe(
  //       (result:any) => {
  //         console.log(result)
  //       },
  //       (error:any) => {
  //         console.log(error)
  //       }
  //     )
  // }



  // FUNCION get CON PARAMETRO EN SERVICE


  //   funcion1(){
  //   this.pruebaService.get(this.var).subscribe(
  //       (result:any) => {
  //         console.log(result)
  //       },
  //       (error:any) => {
  //         console.log(error)
  //       }
  //     )
  // }


  //FUNCION get CON PARAMETROS

  //  funcion1(param:string){
  //   this.pruebaService.get(param).subscribe(
  //       (result:any) => {
  //         console.log(result)
  //       },
  //       (error:any) => {
  //         console.log(error)
  //       }
  //     )
  // }


  //FUNCION post CON PARAMETROS

  //  funcion1(param:string){
  //   this.pruebaService.post(param).subscribe(
  //       (result:any) => {
  //         console.log(result)
  //       },
  //       (error:any) => {
  //         console.log(error)
  //       }
  //     )
  // }

  // FUNCION post CON PARAMETRO EN SERVICE


  //   funcion1(){
  //   this.pruebaService.post(this.var).subscribe(
  //       (result:any) => {
  //         console.log(result)
  //       },
  //       (error:any) => {
  //         console.log(error)
  //       }
  //     )
  // }


}
