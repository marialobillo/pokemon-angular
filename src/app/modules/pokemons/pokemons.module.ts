import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { ListingPokemonsComponent } from './listing-pokemons/listing-pokemons.component';
import { ViewPokemonComponent } from './view-pokemon/view-pokemon.component';
import { PokemonComponent } from './pokemon.component';


@NgModule({
  declarations: [
    ListingPokemonsComponent,
    ViewPokemonComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule
  ]
})
export class PokemonsModule { }
