import styled from "styled-components";

export const AboutStyle = styled.section`
    .about-title {
        &:before {
            content: "";
            position: absolute;
            background: #333;
            left: 0;
            width: 100px;
            height: 1px;
            left: 10px;
            top: 650px;
        }

        span {
            display: block;
            position: relative;
            padding: 0 0 20px 120px;
            font-size: 12px;
            color: #333;
        }

        h2 {
            font-weight: var(--fw-titles);
        }
    }
`;