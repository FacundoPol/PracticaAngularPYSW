import { Component } from '@angular/core';
import { QrService } from '../../services/qr-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-qr-component',
  imports: [CommonModule,FormsModule],
  templateUrl: './qr-component.html',
  styleUrl: './qr-component.css',
})
export class QrComponent {

  constructor(private serviceQr : QrService){

  }

  resultado : string = ""

  urlQr : string = ""

  obtenerQr(){
    this.serviceQr.getQr(this.urlQr).subscribe(
      (result:any) => {
        this.resultado = 'data:image/png;base64,' + result
        // console.log(result)
      },
      (error:any) => {
        console.log(error)
      })
  }


}
