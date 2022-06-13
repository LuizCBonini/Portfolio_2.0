import styled from "styled-components";

export const ProjectStyle = styled.section`

    padding-top: var(--pt-section);
    height: 100vh;

    >div.cards {
        display: flex;

        .mySwiper {
            height: 40rem;
            padding: 1rem ;

            
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

    @media (max-width: 400px) {
        >div.cards .mySwiper .swiper-slide div{
            height: 23rem;
            width: 15rem;
            --padding: 1rem;
            padding-top: 4rem;

            h2{
                font-size: var(--fs-title-mobile);

                &:after {
                    height: .2rem;
                }
            }
            p{
                font-size: var(--fs-text-mobile);
            }

            >div a {
                font-size: var(--fs-text-mobile);
                width: 6rem;
            }
        }
    }
    
`;