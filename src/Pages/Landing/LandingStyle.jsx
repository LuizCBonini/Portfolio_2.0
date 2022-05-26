import styled from 'styled-components';

export const LandingStyle = styled.section`

    margin: 0 auto;
    padding-top: 10rem;

    display: flex;

    /* display: grid;
    grid-template-columns: 50% 50%; */
    align-items: center;
    height:100vh;
    
    .home-blob {
        width: 40vw;

        path {
            fill: var(--cll-primary);
        }

        .home__blob-img {
            width: 13rem;
        }
    }

    .hello {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span {

            width: 45vw;

            h3 {
                font-size: 2.7rem;
            }

            h1 {
                font-size: 5rem;
            }

            p {
                font-size: 2rem;
                font-weight: var(--fw-text);
            }

            span {
                color: var(--cll-primary);
            }

        }
        >p {
            margin: 1rem;
            color: #fff;
            cursor: pointer;
            font-size: 2rem;
            font-weight: var(--fw-text);

            background-color: var(--cll-primary);
            border-radius: 1rem;
            padding: .5rem;

            &:hover{
                background-color: var(--cll-primary-alt);
                transition: .3s;
            }
        }

        .social-content {
            .social-media {
                color: var(--cll-primary);
                margin: 0 1.5rem;
    
                
                svg {
                    width: 3.5rem;
                    height: 3.5rem;
                }
    
                &:hover {
                    color: var(--cll-primary-alt);
                    border-bottom: 2px solid var(--cll-primary);
                }
            }
    
        }
    }

    @media (min-width: 450px) {
        flex-direction: row-reverse;
    }

    @media (max-width: 425px) {
        
        flex-direction: column;
        padding-top: 5rem;

        .home-blob {
            width: 95vw;
        }

        .hello {
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            span {

                width: 80vw;

                h3 {
                    font-size: 2.7rem;
                }

                h1 {
                    font-size: 4.5rem;
                }

                p {
                    font-size: 1.8rem;
                    font-weight: var(--fw-text);
                }

                span {
                    color: var(--cll-primary);
                }

            }
            a {
                margin: 1rem 0;
            }
        }
    }

    @media (min-width: 1500px) {
        
        .hello {
            span {

                width: 50vw;

                h3 {
                    font-size: 4rem;
                }

                h1 {
                    font-size: 6rem;
                }

                p {
                    font-size: 3.5rem;
                    font-weight: var(--fw-text);
                }

                span {
                    color: var(--cll-primary);
                }

            }
            a {
                margin: 1rem 0;
                width: 30rem;
                height: 7rem;
                font-size: 3rem;
            }
        }

    }

`;