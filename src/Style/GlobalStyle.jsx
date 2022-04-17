import { createGlobalStyle } from "styled-components";



// 1. Utilizarei "font-size: 62.5%" para que assim 10px = 1rem.

export default createGlobalStyle`
    :root {
        scroll-behavior: smooth;
        font-size: 62.5%

        --ff-body: 'Poppins', sans-serif;
        
        --fw-titles: 800;
        --fw-text: 400;

        --cll-hue: 250;
        --cll-primary: hsl(var(--hue-color), 69%, 61%);
        --cll-primary-alt: hsl(var(--hue-color), 57%, 53%);
        --cll-primary-lighter: hsl(var(--hue-color), 92%, 85%);
        --cll-primary-more-lighter: hsl(var(--hue-color), 92%, 95%);

        --cll-title: hsl(var(--hue-color), 8%, 15%);
        --cll-text: hsl(var(--hue-color), 8%, 45%);
        --cll-text-lighter: hsl(var(--hue-color), 8%, 65%);

        --cll-input: hsl(var(--hue-color), 70%, 96%);
        --cll-body: hsl(var(--hue-color), 60%, 99%);
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: var(--ff-body);
    }

    a {
        text-decoration: none;
    }
`;