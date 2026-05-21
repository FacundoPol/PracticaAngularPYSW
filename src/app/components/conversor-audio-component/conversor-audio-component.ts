import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConversorAudioService } from '../../services/conversor-audio-service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-conversor-audio-component',
  imports: [FormsModule,CommonModule],
  templateUrl: './conversor-audio-component.html',
  styleUrl: './conversor-audio-component.css',
})
export class ConversorAudioComponent {
  
  voices: string[] = [
  "Alloy",
  "Echo",
  "Fable",
  "Onyx",
  "Nova",
  "Shimmer"
];

  estilosVoz: string[] = [
  "Place emphasis on the words 'wonderful' and 'love'.",
  "Make sure to pause after every sentence.",
  "Speak slowly and clearly.",
  "Increase the pace and sound energetic.",
  "Speak in a lively and optimistic tone.",
  "Use a calm, soothing voice.",
  "Sound serious and authoritative."
];

constructor(private conversorAudioService:ConversorAudioService){
}

vozSeleccionada: string = ""
estiloSeleccionado: string = ""
texto: string = ""

urlTemp:string = ""

  producirAudio(){
  let body = {
   "model": "tts-1",
   "input": this.texto,
   "instructions": this.estiloSeleccionado,
   "voice": this.vozSeleccionada.toLocaleLowerCase()
   }

    console.log(body)

    this.conversorAudioService.postAudio(body).subscribe(
      result => {
        this.urlTemp = URL.createObjectURL(result)
      },
      (error:any)=>{
        console.log(error)
      })
  }
}