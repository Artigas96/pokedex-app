import { gql } from "@apollo/client";



export const ALL_POKEMONS = gql`
    fragment AllPokemons on Pokemon {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
`
