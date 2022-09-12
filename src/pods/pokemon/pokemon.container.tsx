import React from 'react'
import { Image, Spinner } from 'react-bootstrap'
import { useQueryGetAllPokemons } from 'api'


interface PokemonContainerProps {
    maxPokemons: number
}

export const PokemonContainer: React.FC<PokemonContainerProps> = props => {

    const { maxPokemons } = props

    const { data, loading, error } = useQueryGetAllPokemons({ variables: { first: maxPokemons } })

    const [number, setNumber] = React.useState<number>(0)
    const [nombre, setNombre] = React.useState<string>("")

    React.useMemo(() => {
        if (data) {
            const numCalc = parseInt(data.pokemons.find(p => p.name.toUpperCase().includes(nombre.toUpperCase()))?.number ?? '0')
            if (numCalc === 0) {
                return setNumber(0)
            } else {
                return setNumber(numCalc - 1)
            }

        }
    }, [nombre, data])

    return (
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
                    ERROR
                </>
            }
            {
                data &&
                <>
                    <div className='container text-center'>


                        <div className='row'>
                            <div className='col-1'>

                                <label onClick={() => number !== 0 && setNumber(number - 1)} style={{ "cursor": "pointer" }}> {"<--"} </label>

                            </div>
                            <div className='col-10'>
                                <Image src={data.pokemons[number].image} />
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


                                </div>
                                <div className='d-flex justify-content-center'>
                                    <input type="text" onChange={(e) => setNombre(e.target.value)} />
                                </div>
                            </div>
                            <div className='col-1'>
                                <label onClick={() => number !== maxPokemons - 1 && setNumber(number + 1)} style={{ "cursor": "pointer" }}> {"-->"}</label>
                            </div>
                        </div>
                    </div>
                </>
            }

        </>
    )
}