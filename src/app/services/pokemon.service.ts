import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { PokemonList } from '../models/pokemon.detail';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonDetail } from '../models/pokemon.list';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPokemonsList(offset:number, limit: number = 20): Observable<PokemonList[]>{
    return this.http.get<PokemonList[]>(`${this.apiUrl}/pokemon?offset=${offset}&limit=${limit}`)
      .pipe(
        map((x: any) => x.results)
      );
  }

  getPokemonDetail(pokemon: number | string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(`${this.apiUrl}/pokemon/${pokemon}`);
  }

  
}
