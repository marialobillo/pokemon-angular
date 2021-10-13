import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPokemons(pokemon: number | string){
    return this.http.get<any>(`${this.apiUrl}/pokemon/${pokemon}`);
  }
}
