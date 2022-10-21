import styled from "styled-components";

export const ProjectStyle = styled.section`

    padding-top: var(--pt-section);
    position: relative;

    .swiper-pagination-bullet-active {
        background-color: #6e57e0;
    }

    .cards {
        color: #6e57e0;
        text-align: center;
    }

    .swiper-slide {
        display: flex;
        justify-content: center;
        padding: 10px;
        margin-bottom: 50px;
        cursor: grab;
        width: fit-content;
    }
    .busca_button {
        width: 70px;
        cursor: pointer;
    }

    .busca {
        border-radius: 5px;
        border: 1px solid #52006b;
        width: 400px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 0 5px #0000004b;
        position: absolute;
        z-index: 2;
        background-color: #F9F1FF;
        top: 180px;
        left: -400px;
        transition: .4s ease;

        &.active {
            left: 140px;
            transition: .4s;
        }

        span {
            display: flex;
            column-gap: 20px;
            align-items: center;

            button {
                margin-bottom: 10px;
                font-size: 1.5rem;
                height: fit-content;                
            }
        }

        h1 {
            color: #6e57e0;
            margin-bottom: 10px;
        }

    }
    >button {
        margin-left: 50px;
        margin-top: 50px;
    }

    @media (max-width: 425px) {
        .busca_button {
            width: 40px;
        }
            
        .busca {
            width: 270px;
            top: 250px;
            
            &.active {
                left: 50px;
            }

            span {
                column-gap: 20px;
                align-items: center;

                button {
                    margin-bottom: 10px;
                    font-size: 1.5rem;
                    height: fit-content;                
                }
            }

            h1 {
                color: #6e57e0;
                margin-bottom: 10px;
            }

        }
        >button {
            margin-left: 50px;
            margin-top: 20px;
            margin-bottom: 100px;
        }
    }

`;