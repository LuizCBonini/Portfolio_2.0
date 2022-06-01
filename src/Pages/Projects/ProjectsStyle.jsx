import styled from "styled-components";

export const ProjectStyle = styled.section`

    padding-top: var(--pt-section);
    height: 100vh;

    >div.cards {
        display: flex;

        .mySwiper {
            height: 40rem;
            padding: 1rem 4rem;

            /* .swiper-slide {
                width: 20rem !important;
            } */

            
            .swiper-button-next,
            .swiper-button-prev {
                color: var(--cll-primary);
                font-weight: 600;
                /* background-color: var(--cll-primary-lighter);
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
                } */
            }
        }
        
        >div {
            margin-left: 5rem;
        }
    }
    @media (max-width: 800px) {
        >div.cards {

            .mySwiper {

                
                .swiper-button-next,
                .swiper-button-prev {
                    display: none;
                }
            }
        }
    }
    
`;