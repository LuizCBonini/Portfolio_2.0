import React from 'react';

import { CardStyle } from './CardStyle';

import Button from '../Button/Button'

const Card = ({CardTitle, CardDescription, CardImg}) => {
    return ( 

        <CardStyle image={CardImg}>

            <div className='card-content'>
                <h2>{CardTitle}</h2>
                <p>{CardDescription}</p>
                <Button>Saiba Mais</Button>
            </div>
            
        </CardStyle>

     );
}
 
export default Card;