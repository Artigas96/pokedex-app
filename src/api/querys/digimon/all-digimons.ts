import { gql } from "@apollo/client";
import { Digimon } from './../../../types';
import { ALL_DIGIMON } from "../../fragments";


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


