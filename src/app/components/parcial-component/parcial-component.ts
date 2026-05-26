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
    


}
