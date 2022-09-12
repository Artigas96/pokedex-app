import { gql, LazyQueryHookOptions, useLazyQuery, useQuery } from "@apollo/client";
import { ALL_DIGIMON } from "api/fragments";
import { Digimon } from 'types';


export const GET_ALL_DIGIMONS = gql`
    ${ALL_DIGIMON}
    query digimons {
      getDigimon {
        ...AllDigimons
      }
    }
`

export interface AllDigimonData {
  digimons : Digimon[]
}


export interface AllDigimonVars {
  
}

export const useQueryGetAllPokemons = (options?: LazyQueryHookOptions<AllDigimonData, AllDigimonVars>) => {
  return useQuery<AllDigimonData, AllDigimonVars>(
    GET_ALL_DIGIMONS,
    options ?? {
      errorPolicy: 'ignore',
    }
  )
}
// No se usa
export const useLazyQueryGetAllPokemons = (options?: LazyQueryHookOptions<AllDigimonData, AllDigimonVars>) => {
  return useLazyQuery<AllDigimonData, AllDigimonVars>(
    GET_ALL_DIGIMONS,
    options ?? {
      errorPolicy: 'ignore',
    }
  )
}
