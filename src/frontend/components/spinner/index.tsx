import React from 'react'
import { ClipLoader } from 'react-spinners'
import { LoaderContainer } from './style'


const Spinner: React.FC = () => {
    return (
        <LoaderContainer>
            <ClipLoader color={'#285CDC'} size={120} />
        </LoaderContainer>
    )
}

export default Spinner
