import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './models/Movie';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http : HttpClient) { }


    getMovies() : Observable<Movie[]> {
        return this.http.get<Movie[]>('https://jsonplaceholder.typicode.com/posts');
    }
}
