import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { moviesSelector } from '../ngrx/selectors';
import { Observable } from 'rxjs';
import { Movie } from '../models/Movie';
import { startFetchingMovies } from '../ngrx/movie.actions';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit  {
   
     movies$ : Observable<Movie[]>
    
   constructor(private store : Store){

       this.store.dispatch(startFetchingMovies())
       this.movies$ =   this.store.select(moviesSelector)  
   }

   ngOnInit(): void {
   
    
   }

}
