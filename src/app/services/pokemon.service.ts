import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // getPokemonsList(offset:number, limit: number = 20): Observable<PokemonList[]>

  
}
