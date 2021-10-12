import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl: string = environment.base_url;

  constructor(private http: HttpClient) { }

  getPokemons(query: any){
    return this.http.get<any>(`${this.baseUrl}/pokemon/${query}`);
  }
}
