import { gql, useQuery } from "@apollo/client";
import { Pokemon } from "../../types";
import { ALL_POKEMONS } from "../fragments";


export const GET_ALL_POKEMONS = gql`
    ${ALL_POKEMONS}
    query pokemons($first: Int!) {
      pokemons(first: $first){
        ...AllPokemons
      }
    }
`

export interface AllPokemonsData {
  pokemons : Pokemon[]
}


export interface AllPokemonsVars {
  first : number
}


