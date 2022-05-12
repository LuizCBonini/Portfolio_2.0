import styled from 'styled-components'

export const CardStyle = styled.div`
    width: 24rem;
    height: 35rem;
    border-radius: 2rem;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.20);
    display: flex;
    flex-wrap: wrap;
    align-content: flex-end;
    background: url(${(props) => props.image}) no-repeat top center;
    background-size: cover;
    font-weight: var(--fw-text);
    overflow: hidden;

    transition: transform 500ms ease;
    
    div.card-content {
        
        --padding: 2.5rem;
        background: linear-gradient(hsl(0 0% 0% / 0),hsl(0 0% 0% / 0.3) 10%, hsl(0 0% 0% / 1));
        padding: var(--padding);

        transform: translateY(65%);
        transition: transform 500ms ease;

        h2 {
            color: #fff;
            position: relative;
            width: max-content;

            &:after {
                content: "";
                position: absolute;
                height: 0.4rem;
                width: calc(100% + var(--padding));
                left: calc(var(--padding) * -1);
                bottom: 0;
                background: var(--cll-primary);
                border: 1px solid var(--cll-primary-alt);
                border-radius: 0 0 .3rem 0;

                transform: scaleX(0);
                transform-origin: left;
                transition: transform 500ms ease;
            }
        }

        p {
            font-size: var(--fs-text);
            color: #fff;
            padding: 1.5rem 0;
        }

        >div {
            display: flex;

            a {
                margin-right: 1rem;
                width: 9rem;
                height: 2.5rem;
                font-size: 1.2rem;
                border-radius: .3rem;
                cursor: pointer;
            }
        }
    }

    &:hover {
        transform: scale(1.05);

        div.card-content {
            
            transform: translateY(0%);
            transition-delay: 500ms;
            
            h2 {
                &:after {
                    transform: scaleX(1);
                }
            }

        }
    }
`;