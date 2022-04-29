import styled from "styled-components";

export const AboutStyle = styled.section`

    
    padding-top: var(--pt-section);

    section {

        display: grid;
        gap: 1rem;
        grid-template-columns: 50% 50%;


        >div.video {
            position: relative;
            width: 100%;
            min-height: 20rem;
            display: flex;
            justify-content: center;
            align-itens: center;

            video {
                position: absolute;
                width: 70%;
                height: 95%;
                object-fit: cover;
            }

            img {
                position: absolute;
                width: 80%;
                height: 100%;
                z-index: 2;
                user-select: none;
                mix-blend-mode: screen;
            }
        }

        >div.content {

            box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.11);
            width: 80%;
            padding: 2rem;
            border-radius: 1rem;

            font-weight: var(--fw-text);
            
            h2 {
                color: var(--cll-primary);
            }

            p{

                line-height: 2.5rem;
                margin-bottom: 1rem;
                font-size: var(--fs-text);

                span {
                    color: var(--cll-primary);
                }
            }
            
        }
    }
`;