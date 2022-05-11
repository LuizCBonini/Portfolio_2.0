import React from 'react';


import { ButtonStyled } from "./ButtonStyle";

const Button = ({link, children}) => {
    return ( 
        <ButtonStyled href={link} target='_blank' rel="noreferrer">
            {children}
        </ButtonStyled>
     );
}
 
export default Button;