import styled from "styled-components";

export const HeaderStyle = styled.div`

    width: 100%;
    padding: 2rem;
    display: flex;
    justify-content: space-around;
    align-itens: center;
    position: fixed;
    backdrop-filter: blur(4px);
    border-bottom: 0.2rem solid var(--cll-primary);
    z-index: 3;


    h2 {
        color: var(--cll-primary);
        font-size: var(--fs-title);
    }

    >div {

        display: flex;
        align-items: center;

        .nav-bar > ul.menu {
            list-style: none;
            display: flex;

            li a span {
                color: var(--cll-primary);
                margin-left: 1.5rem;
                font-weight: var(--fw-text);
                text-transform: uppercase;
                font-size: var(--fs-text);
                
                &:hover {
                    color: var(--cll-primary-alt);
                    border-bottom: 2px solid var(--cll-primary-lighter);
                }
            }

        }
    }
    
`;