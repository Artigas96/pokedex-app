import React from 'react';
import { PokemonContainer } from 'pods/pokemon';

const MAX_POKEMONS = 151

interface PokemonsSceneProps {

}

export const PokemonsScene: React.FC<PokemonsSceneProps> = props => {



  return (
    <>
      <PokemonContainer maxPokemons={MAX_POKEMONS} />
    </>
  )
}