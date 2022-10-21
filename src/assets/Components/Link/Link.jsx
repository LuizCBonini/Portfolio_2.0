//================================//imports//=======================================
import styled from "styled-components";

//================================//Images//========================================


//================================//Style//=========================================

export const LinkStyled = styled.a`
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 1rem;
    font-weight: 500;
    background-color: var(--cll-primary);
    padding: 1rem;
    font-size: 1.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .5s;
    box-shadow: -2px 5px 0 0 #5c47c7;

    
    &:active {
        transition: .05s;
        transform: translate(-2px, 5px);
        box-shadow: none;

    }

`;

//================================//Code//==========================================

const Link = ({children, LinkUrl}) => {
    return ( 
        <LinkStyled href={LinkUrl} target="_blank">
            {children}
        </LinkStyled>
     );
}
 
export default Link;