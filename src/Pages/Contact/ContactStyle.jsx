import styled from "styled-components";

export const ContactStyle = styled.section`
    background-color: var(--cll-primary);
    height: 50rem;

    h2 {
        color: #fff;
    }

    >div.contact-content {
        font-size: var(--fs-text);
        font-weight: var(--fw-text);
        width: 70rem;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.21);
        border-radius: 1rem;
        padding: 4rem;
        background-color: var(--cll-primary-alt);
        

        margin: 0 auto;
        text-align: center;

        .social-media {
            color: var(--cll-primary-more-lighter);
            margin: 0 1.5rem;

            
            svg {
                width: 3.5rem;
                height: 3.5rem;
            }

            &:hover {
                color: var(--cll-primary-lighter);
                border-bottom: 2px solid var(--cll-primary-lighter);
            }
        }
    }
`;