import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'image'];
  data: any[] = []; 
  dataSource = new MatTableDataSource<any>(this.data);


  pokemons: any[] = [];  
  page: number = 1;
  totalPokemons: number = 0;

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(){
    let pokemonData;

    for(let i = 1; i <= 150; i++){
      this.pokemonService.getPokemons(i).subscribe(
        response => {
          pokemonData = {
            position: i,
            name: response.name,
            image: response.sprites.front_default
          };
          this.data.push(pokemonData);
          this.dataSource = new MatTableDataSource<any>(this.data);
        },
        error => {
          console.log(error);
        }
      );
    }
  
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getRow(row: any){
    this.router.navigateByUrl(`pokemons/${row.name}`);
  }


}
