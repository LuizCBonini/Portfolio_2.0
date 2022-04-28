import styled from 'styled-components';

export const LandingStyle = styled.div`

    margin: 0 auto;
    padding-top: 6rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    
    .home-blob {
        width: 30rem;


        .home__blob-img {
            width: 8rem;
        }
    }

    .hello {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 30rem;

        h3 {
            font-size: 2rem;
        }

        h1 {
            font-size: 3rem;
        }

        p {
            font-size: 1.3rem;
            font-weight: 600;
        }

        span {
            color: var(--cll-primary);
        }

        a {
            margin: 1rem;
        }

        .social-content {
            .social-media {
                color: var(--cll-primary);
                margin: 0 1.5rem;

                
                svg {
                    width: 2rem;
                    height: 2rem;
                }

                &:hover {
                    color: var(--cll-primary-alt);
                    border-bottom: 2px solid var(--cll-primary);
                }
            }
        }

    }


`;