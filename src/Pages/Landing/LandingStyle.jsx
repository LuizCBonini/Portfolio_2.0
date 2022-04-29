import styled from 'styled-components';

export const LandingStyle = styled.div`

    margin: 0 auto;
    padding-top: 10rem;
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    
    .home-blob {
        width: 50rem;


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
        width: 50rem;

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

        a {
            margin: 1rem;
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


`;