import styled from "styled-components";

export const ProjectStyle = styled.section`

    padding-top: var(--pt-section);
    height: 100vh;

    >div.cards {
        display: flex;

        .mySwiper {
            height: 40rem;
            padding: 1rem 4rem;

            
            .swiper-button-next,
            .swiper-button-prev {
                color: var(--cll-primary);
                font-weight: 600;
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