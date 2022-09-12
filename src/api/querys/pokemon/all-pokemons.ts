import { gql, LazyQueryHookOptions, useLazyQuery, useQuery } from "@apollo/client";
import { Pokemon } from "../../../types";
import { ALL_POKEMONS } from "../../fragments";


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


export const useQueryGetAllPokemons = (options?: LazyQueryHookOptions<AllPokemonsData, AllPokemonsVars>) => {
  return useQuery<AllPokemonsData, AllPokemonsVars>(
    GET_ALL_POKEMONS,
    options ?? {
      errorPolicy: 'ignore',
    }
  )
}
// No se usa
export const useLazyQueryGetAllPokemons = (options?: LazyQueryHookOptions<AllPokemonsData, AllPokemonsVars>) => {
  return useLazyQuery<AllPokemonsData, AllPokemonsVars>(
    GET_ALL_POKEMONS,
    options ?? {
      errorPolicy: 'ignore',
    }
  )
}
