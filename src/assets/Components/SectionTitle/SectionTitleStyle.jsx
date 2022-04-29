import styled from "styled-components";

export const SectionTitleStyle = styled.div`
    padding-top: 6rem;

    &:before {
        content: "";
        position: absolute;
        background: #333;
        left: 0;
        width: 5rem;
        height: 0.1rem;
        margin-top: 1rem;
    }

    span {
        position: relative;
        display: block;
        padding: 0 0 2rem 5.5rem;
        font-size: 1.2rem;
    }

    h2 {
        color: var(--cll-primary);
        font-weight: var(--fw-text);
    }
`;