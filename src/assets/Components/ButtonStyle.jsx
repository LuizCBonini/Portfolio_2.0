import styled from "styled-components";

export const ButtonStyled = styled.a`
    color: white;
    height: 2.5rem;
    width: 10rem;
    border-radius: 20px;
    font-weight: 600;
    background-color: var(--cll-primary);
    padding: .5rem;

    &:hover {
        background-color: var(--cll-primary-alt);
        transition: .7s;
    }

`;