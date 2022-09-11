import React from 'react'


import '../App.css';
import {  useQuery } from '@apollo/client';
import { Image, Spinner } from 'react-bootstrap';
import { AllPokemonsData, GET_ALL_POKEMONS, AllPokemonsVars } from '../api';



const MAX_POKEMONS = 151

interface MainProps{

}



export const Main: React.FC<MainProps> = props => {
    const {data, loading, error} = useQuery<AllPokemonsData, AllPokemonsVars>(
        GET_ALL_POKEMONS,
        {variables: {first: MAX_POKEMONS}}
    )
    
    const [number, setNumber] = React.useState<number>(0)
    const [nombre, setNombre] = React.useState<string>("")

    React.useMemo( () =>{
        if(data){
            const numCalc = parseInt(data.pokemons.find(p => p.name.toUpperCase().includes(nombre.toUpperCase()))?.number ?? '0')
            if(numCalc === 0){
                return setNumber(0)
            }else{
                return setNumber(numCalc-1)
            }
            
        }
    }, [nombre,data])


    return(
        <>
            {
                loading &&
                <>
                    <Spinner animation={'border'} />
                </>
            }
            {
                error && 
                <>
                    Error
                </>
            }
            {
                data &&
                <>
                    <div className="App">
                        <header className="App-header">
                            <Image src={data.pokemons[number].image}/>
                            <h1>{data.pokemons[number].name}</h1>
                            <ul>
                                <li>
                                    <label>Número: {data.pokemons[number].number}</label>
                                </li>
                                <li>
                                    <label>Peso: {data.pokemons[number].weight.minimum} - {data.pokemons[number].weight.minimum}</label>
                                </li>
                                <li>
                                    <label>Altura: {data.pokemons[number].height.minimum} - {data.pokemons[number].height.minimum}</label>
                                </li>
                                <li>
                                    <label>Categoria: {data.pokemons[number].classification}</label>
                                </li>
                            </ul>
                            <div className='d-flex justify-content-between'>
                                <label onClick={ () => number!==0 && setNumber(number-1)} style={{"cursor": "pointer"}}> {"<--       "} </label>
                                <label onClick={ () => number!==MAX_POKEMONS-1 && setNumber(number+1)} style={{"cursor": "pointer"}}> {"      -->"}</label>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <input type="text" onChange={(e) => setNombre(e.target.value)}/>
                            </div>
                        </header>
                    </div>
                </>
            }
            
        </>
    )
}