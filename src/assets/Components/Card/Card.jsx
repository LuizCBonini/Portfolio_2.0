import React from 'react';

import { CardStyle } from './CardStyle';

import Button from '../Button/Button'

const Card = ({CardTitle, CardDescription, CardImg, linkGithub, linkSite}) => {
    return ( 

        <CardStyle image={CardImg}>

            <div className='card-content'>
                <h2>{CardTitle}</h2>
                <p>{CardDescription}</p>

                <div>
                    <Button link={linkGithub}>Repositório</Button>
                    <Button link={linkSite}>Site</Button>
                </div>
                
            </div>
            
        </CardStyle>

     );
}
 
export default Card;