import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DataServiceService } from "../data-service.service";
import { getMoviesSucces, startFetchingMovies } from "./movie.actions";
import { catchError, exhaustMap, map } from "rxjs";
import { Injectable } from "@angular/core";


@Injectable()
export class MovieEffects {


     getMovies$ = createEffect(()=>this.actions$.pipe(
         
        ofType(startFetchingMovies),
        exhaustMap(()=> this.dataService.getMovies().pipe(
            map((movies)=> getMoviesSucces({movies}))
        ))
     ))
  


    constructor(private actions$ : Actions , private dataService : DataServiceService ){}

}