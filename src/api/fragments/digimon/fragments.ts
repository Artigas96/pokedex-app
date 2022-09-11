import { gql } from "@apollo/client";


export const DIGIMON = gql`
  
  fragment Digimons on Digimon {
    id
    slug
    name
    isJogress
    hasXAntibody
    rank
    attribute
  }
`


export const ALL_DIGIMON = gql`
  ${DIGIMON}
  fragment AllDigimons on Digimon {
    ...Digimons
    previous{
      ...Digimons
    }
    next{
      ...Digimons
    }
  }
`


