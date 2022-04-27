import styled from "styled-components";

export const AboutStyle = styled.section`
    div {
        &:before {
            content: "";
            position: absolute;
            background: #333;
            left: 0;
            width: 50px;
            height: 1px;
            left: 10px;
            top: 650px;
        }

        span {
            display: block;
            position: relative;
            padding: 0 0 20px 65px;
            font-size: 12px;
            color: #333;
        }

        h2 {
            font-weight: var(--fw-titles);
            color: var(--cll-primary-alt);
        }
    }

    section {
        position: relative;
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-itens: center;

        video {
            position: absolute;
            width: 100%;
            height: 90%;
            object-fit: cover;
        }

        img {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 2;
            user-select: none;
            mix-blend-mode: screen;
        }
    }
`;