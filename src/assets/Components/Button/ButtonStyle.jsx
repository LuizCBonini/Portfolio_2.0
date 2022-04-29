import styled from "styled-components";

export const ButtonStyled = styled.a`
    color: white;
    height: 4rem;
    width: 18rem;
    border-radius: 1rem;
    font-weight: var(--fw-text);
    background-color: var(--cll-primary);
    padding: 1rem;
    font-size: 1.8rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: var(--cll-primary-alt);
        transition: .7s;
    }

`;