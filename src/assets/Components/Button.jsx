import React from 'react';


import { ButtonStyled } from "./ButtonStyle";

const Button = ({link, children}) => {
    return ( 
        <ButtonStyled href={link}>
            <p>{children}</p>
        </ButtonStyled>
     );
}
 
export default Button;