export interface PokemonDetail{
    id: number;
    order: number;
    name: string; 
    height: number;
    abilities: Ability[];
    spices: Species;
    types: Type[];
    weight: number;
    sprites: Sprite;
    stats: Stat[];

}

interface Ability  {
    ability: {
        name: string;
    }
}

interface Species {
    url: string;
}

interface Type {
    slot: number;
    type: {
        name: string;
    }
}

interface Sprite {
    front_default: string;
}

interface Stat {
    base_stat: number;
    stat: {
        name: string;
    }
}
