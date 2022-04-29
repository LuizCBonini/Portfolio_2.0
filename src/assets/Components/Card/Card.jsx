import React from 'react';

import { CardStyle } from './CardStyle';

import Button from '../Button/Button'

const Card = ({CardTitle, CardDescription, CardImg}) => {
    return ( 

        <CardStyle image={CardImg}>

            <section className='teste'>
                <h2>{CardTitle}</h2>
                <p>{CardDescription}</p>
                <Button>Saiba Mais</Button>
            </section>
            
        </CardStyle>

     );
}
 
export default Card;