import { useQuery } from '@apollo/client'
import React from 'react'
import { Spinner } from 'react-bootstrap'
import { AllDigimonData, AllDigimonVars, GET_ALL_DIGIMONS } from '../../api'



interface DigimonSceneProps{

}

export const DigimonScene: React.FC<DigimonSceneProps> = props => {

    const {data, loading, error} = useQuery<AllDigimonData, AllDigimonVars>(
        GET_ALL_DIGIMONS
    )

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
                    {data.digimons[0].name}
                    {data.digimons[0].slug}
                </>
            }
        </>
    )
}