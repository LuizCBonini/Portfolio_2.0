import styled from "styled-components";

export const HeaderStyle = styled.div`

    width: 100%;
    padding: 1.5rem;
    display: flex;
    justify-content: space-around;
    align-itens: center;
    position: fixed;


    h2 {
        color: var(--cll-primary);
    }

    >div {

        .nav-bar > ul.menu {
            list-style: none;
            display: flex;

            li a span {
                color: var(--cll-primary);
                margin-left: 1.5rem;
                font-weight: bold;
                text-transform: uppercase;
                
                &:hover {
                    color: var(--cll-primary-alt);
                    border-bottom: 2px solid var(--cll-primary-lighter);
                }
            }

        }
    }
    
`;