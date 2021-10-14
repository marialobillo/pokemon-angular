import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: any = '';
  pokemonType = [];
  pokemonImg = '';

  constructor(
    private pokemonService: PokemonService, 
    private activatedRouter: ActivatedRoute
  ) {
    this.activatedRouter.params.subscribe(
      params => {
        this.getPokemon(params['pokemon']);
      }
    );
  }

  ngOnInit(): void {
  }

  getPokemon(pokemon: string | number){
    this.pokemonService.getPokemons(pokemon).subscribe(
      response => {
        this.pokemon = response;
        this.pokemonImg = this.pokemon.sprites.front_default;
        this.pokemonType = response.types[0].type.name;
        console.log(this.pokemon);
      },
      error => {
        console.log(error);
      }
    );
    console.log()
  }

}
