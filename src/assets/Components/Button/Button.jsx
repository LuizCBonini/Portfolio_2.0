import React from 'react';


import { ButtonStyled } from "./ButtonStyle";

const Button = ({children, onPress}) => {
    return ( 
        <ButtonStyled onClick={onPress}>
            {children}
        </ButtonStyled>
     );
}
 
export default Button;