import { Component } from '@angular/core';
import { MovieService } from '../../services/movie-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-component',
  imports: [CommonModule,FormsModule],
  templateUrl: './movie-component.html',
  styleUrl: './movie-component.css',
})
export class MovieComponent {


  rank:number=0
  title : string = ''
  description: string = ''
  image: string = ''
  year: string = ''
  genre: string = ''

  listaMovies:Array<any>=[]

  constructor(private movieService:MovieService){
    this.cargarMovies()
  }

  cargarMovies(){
    this.movieService.getMovies().subscribe(
      (result:any)=>{
        this.listaMovies = result
        // console.log(result)
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
}
