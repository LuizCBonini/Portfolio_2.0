import styled from "styled-components";

export const TechStyle = styled.div`
    padding-top: var(--pt-section);
    height: 100vh;

    section {

        div {

            box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.11);
            padding: 3rem;
            margin: 2rem 10rem 2rem 2rem;
            width: 50%;
            border-radius: 2rem;
            backdrop-filter: blur(4px);
            position: absolute;
            

            display: flex;

            ul{

                list-style: none;
                display:flex;
                align-items: center;
                flex-wrap: wrap;
                justify-content: center;
                
            
                li {

                    color: var(--cll-primary);
                    margin: 3rem;
                    
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    cursor: pointer;

                    svg {
                        font-size: 3rem;
                    }

                    p{
                        font-size: var(--fs-text);
                        font-weight: var(--fw-text);
                    }

                    &:hover {
                        color: var(--cll-primary-alt);

                        border-bottom: .2rem solid var(--cll-primary-alt);
                    }
                }
            }
        }

    
        img {
            width: 100%;
            height: 72vh;
            position: absolute;
            right: 0;
            bottom: 0;
            pointer-events: none;
        }

        >svg {
    
            position: absolute;
            top: 185.2rem;
            z-index: -1;
            pointer-events: none;
        
            .bg1 {
                fill: var(--cll-primary-more-lighter);
            }
    
            .bg2 {
                fill: var(--cll-primary-lighter);
            }
    
            .bg3 {
                fill: var(--cll-primary);
            }
        }
    }

`;