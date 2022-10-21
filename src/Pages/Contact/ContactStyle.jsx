import styled from "styled-components";

export const ContactStyle = styled.section`
    padding-top: var(--pt-section);


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

            margin: 50px auto;
            padding: 2rem;


            width: 100%;
            max-width: 50%;

            border: 1px solid var(--cll-primary-alt);
            border-radius: 1rem;

            background-color: var(--cll-primary);

            label {
                color: var(--cll-primary-lighter);
                font-size: var(--fs-title);
                font-weight: var(--fw-text);
            }

            input,
            textarea {
                padding: .8rem;
                border-radius: 1rem;
                border: 2px solid transparent;
                font-family: inherit;
                width: 90%;

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
                border: 1px solid var(--cll-primary-lighter);
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
        }
    }
`;