import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { App } from './scenes/App.tsx';
import './App.scss';





const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <App />
  ,
)


