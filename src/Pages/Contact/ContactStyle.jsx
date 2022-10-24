import styled from "styled-components";

export const ContactStyle = styled.section`
    padding-top: var(--pt-section);
    position: relative;

    .background {
        background-color: var(--cll-primary);
        height: 50%;
        width: 100%;
        position: absolute;
        z-index: -1;
        bottom: 0;
        border-radius: 0 100px 0 0;
    }

    .frase {
        color: #ffffff;
        position: absolute;
        right: 250px;
        bottom: 250px;
        font-size: 4rem;

        span {
            background-color: var(--cll-primary-lighter);
            color: var(--cll-primary);
            padding: 5px;
            border-radius: 3px;
        }

        @media (max-width: 1440px) {
            right: 70px;
        }
        @media (max-width: 1260px) {
            font-size: 3.5rem;
        }
        @media (max-width: 1025px) {
            font-size: 3rem;
            right: 40px;
        }
        @media (max-width: 768px) {
            display: none;
        }
    }

    .subFrase {
        color: #fff;
        position: absolute;
        right: 230px;
        bottom: 200px;
        font-size: 1.5rem;

        @media (max-width: 1440px) {
            right: 50px;
        }
        @media (max-width: 1260px) {
            right: 200px;
            max-width: 300px;
        }
        @media (max-width: 1025px) {
            right: 110px;
            max-width: 300px;
        }
        @media (max-width: 768px) {
            display: none;
        }
    }

    h1,
    h2 {
        color: var(--cll-primary);
    }

    >div.form-box {
        text-align: center;

        form {
            display: flex;
            flex-direction: column;
            
            align-items: center;
            justify-content: center;

            margin: 100px;
            padding: 2rem;


            width: 100%;
            max-width: 50%;

            border: 1px solid #52006B;
            border-radius: 1rem;
            box-shadow: 0 0 5px #0000004b;

            background-color: #fff;

            label {
                color: var(--cll-primary-alt);
                font-size: var(--fs-title);
                font-weight: var(--fw-text);                
            }

            input,
            textarea {
                padding: .8rem;
                border-radius: 1rem;
                border: 1px solid #52006B;
                font-family: inherit;
                width: 90%;
                margin-bottom: 30px;
                

                &:hover,
                &:focus {
                    outline: none;
                    border-color: var(--cll-primary);
                }
            }

            textarea {
                max-height: 20rem;
                max-width: 90%;
                resize: vertical;
            }

            button {
                color: #fff;
                background-color: var(--cll-primary);
                border-radius: 1rem;
                margin-top: 1rem;
                width: 20rem;
                height: 3rem;
                cursor: pointer;
                font-family: inherit;
                font-size: 2rem;
                font-weight: var(--fw-text);
                transition: 250ms ease;

                &:hover {
                    transform: translateY(5%);
                    color: var(--cll-primary-lighter);
                }
            }

            @media (max-width: 1025px) {
                margin: 20px;
            }
            @media (max-width: 768px) {
                margin: 20px auto;
                max-width: 90% !important;
            }
        }
    }
`;