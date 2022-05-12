import styled from "styled-components";

export const ProjectStyle = styled.div`

    padding-top: var(--pt-section);
    height: 70rem;

    >div.cards {
        display: flex;
        margin-top: 2rem;

        .mySwiper {
            height: 40rem;
            padding: 4rem;

            .swiper-button-next,
            .swiper-button-prev {
                background-color: var(--cll-primary-lighter);
                color: var(--cll-primary);
                padding: 2rem;
                border: 1px solid var(--cll-primary);
                border-radius: 50%;

                &:after {
                    font-size: 3rem;
                }

                &:hover {
                    background-color: var(--cll-primary);
                    color: var(--cll-primary-alt);
                    border: 1px solid var(--cll-primary-more-lighter);
                    transition: 300ms ease;
                }
            }
        }

        >div {
            margin-left: 2rem;
        }
    }

`;