import { createGlobalStyle } from "styled-components";



// 1. Utilizarei "font-size: 62.5%" para que assim 10px = 1rem.

const GlobalStyle = createGlobalStyle`
    :root {
        scroll-behavior: smooth;
        font-size: 62.5%

        --ff-body: 'Poppins', sans-serif;
        
        --fw-titles: 800;
        --fw-text: 400;

        --cll-hue: 250;
        --cll-primary: hsl(var(--cll-hue), 69%, 61%);
        --cll-primary-alt: hsl(var(--cll-hue), 57%, 53%);
        --cll-primary-lighter: hsl(var(--cll-hue), 92%, 85%);
        --cll-primary-more-lighter: hsl(var(--cll-hue), 92%, 95%);

        --cll-title: hsl(var(--cll-hue), 8%, 15%);
        --cll-text: hsl(var(--cll-hue), 8%, 45%);
        --cll-text-lighter: hsl(var(--cll-hue), 8%, 65%);

        --cll-input: hsl(var(--cll-hue), 70%, 96%);
        --cll-body: hsl(var(--cll-hue), 60%, 99%);
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', sans-serif;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;