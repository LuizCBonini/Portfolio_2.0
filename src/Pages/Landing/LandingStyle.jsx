import styled from 'styled-components';

export const LandingStyle = styled.div`

    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;

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

    }


`;