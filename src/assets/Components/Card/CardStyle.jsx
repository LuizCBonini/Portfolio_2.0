import styled from 'styled-components'

export const CardStyle = styled.div`
    width: 24rem;
    height: 34rem;
    border-radius: 1rem;
    box-shadow: 1px 1px 4px 2px black;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-end;
    background: url(${(props) => props.image}) no-repeat top center;
    background-size: cover;
    font-weight: var(--fw-text);

    margin 3rem;
    
    section.teste {
        
        background: linear-gradient(hsl(0 0% 0% / 0), hsl(0 0% 0% / 1));
        padding: 2rem;
        border-radius: 0.8rem;

        h2 {
            color: var(--cll-primary);
        }

        p {
            font-size: var(--fs-text);
            color: white;
        }

        a {
            width: 10.5rem;
            height: 2.5rem;
            font-size: var(--fs-text);
        }
    }
`;