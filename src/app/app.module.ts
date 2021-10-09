import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/shared/material.module';
import { ListingPokemonsComponent } from './modules/listing-pokemons/listing-pokemons.component';
import { ViewPokemonComponent } from './modules/view-pokemon/view-pokemon.component';
import { PokemonsComponent } from './modules/pokemons.component';


@NgModule({
  declarations: [
    AppComponent,
    ListingPokemonsComponent,
    ViewPokemonComponent,
    PokemonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
