import React from 'react';


import { ButtonStyled } from "./ButtonStyle";

const Button = ({link, children}) => {
    return ( 
        <ButtonStyled href={link}>
            {children}
        </ButtonStyled>
     );
}
 
export default Button;