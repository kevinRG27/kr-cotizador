import React from 'react'
import styled from '@emotion/styled'
import {primeraMayuscula} from '../Helper'

const ContenedorResumen = styled.div`
    padding : 1rem;
    text-align : center;
    background-color: #00838F;
    color : #FFF;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {

    const {marca,year,plan} = datos;

    if(marca === '' || year === '' || plan === '') return null;

    return ( 
        <ContenedorResumen>
            <h1>Resumen de Cotización</h1>
            <ul>
                <li>Marca: {primeraMayuscula(marca)} </li>
                <li>Plan: {primeraMayuscula(plan)} </li>
                <li>Año del Auto: {primeraMayuscula(year)}</li>
            </ul>
        </ContenedorResumen>
     );
}
 
export default Resumen;