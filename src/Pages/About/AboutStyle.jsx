import styled from "styled-components";

export const AboutStyle = styled.section`
    
    padding-top: 6rem;

    
    >div {
        &:before {
            content: "";
            position: absolute;
            background: #333;
            left: 0;
            width: 50px;
            height: 1px;
            left: 10px;
            top: 42.5rem;
        }

        span {
            display: block;
            position: relative;
            padding: 0 0 20px 65px;
            font-size: 12px;
            color: #333;
        }

        h2 {
            font-weight: var(--fw-text);
            color: var(--cll-primary-alt);
        }
    }

    section {

        display: grid;
        gap: 1rem;
        grid-template-columns: 1fr 1fr;


        >div.video {
            position: relative;
            width: 100%;
            min-height: 20rem;
            display: flex;
            justify-content: center;
            align-itens: center;

            video {
                position: absolute;
                width: 90%;
                height: 75%;
                object-fit: cover;
            }

            img {
                position: absolute;
                width: 100%;
                height: 80%;
                z-index: 2;
                user-select: none;
                mix-blend-mode: screen;
            }
        }

        >div.content {

            box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.11);
            width: 30rem;
            padding: 2rem;
            border-radius: 1rem;

            font-weight: var(--fw-text);
            
            h2 {
                color: var(--cll-primary);
            }

            p{

                line-height: 1.6rem;
                margin-bottom: 1rem;

                span {
                    color: var(--cll-primary);
                }
            }
            
        }
    }
`;