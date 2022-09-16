import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PokemonsScene } from './pokemon'
import { DigimonScene } from './digimon'
import { SelectorScene } from './selector'
import { NavBar } from 'components/navbar'




const clientPokemon = new ApolloClient({
  uri: 'https://graphql-pokemon2.vercel.app',
  cache: new InMemoryCache(),
})

const clientDigimon = new ApolloClient({
  uri: 'https://gennai.herokuapp.com/graphql',
  cache: new InMemoryCache(),
})



interface AppProps {

}

export const App: React.FC<AppProps> = props => {
  return (
    <>
      <BrowserRouter >
        <NavBar />
        <Routes>
          <Route path="/pokemon" element={<ApolloProvider client={clientPokemon}><PokemonsScene /></ApolloProvider>} />
          <Route path="/digimon" element={<ApolloProvider client={clientDigimon}><DigimonScene /></ApolloProvider>} />
          <Route path="/" element={<SelectorScene />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}