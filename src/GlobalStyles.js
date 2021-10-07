import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    :root {
        /* Fonts  */
        --ff-primary: "Kumbh Sans", sans-serif;
        --fs-body: 12px;
        --fw-regular: 400;
        --fw-bold: 700;

        /* Colors  */
        --primary-color-text: hsl(238, 29%, 16%);
        --secondary-color-text: hsl(14, 88%, 65%);
        --tertiary-color-text: hsl(237, 12%, 33%);
        --quaternary-color-text: hsl(240, 6%, 50%);

        --primary-color-gradient: hsl(273, 75%, 66%);
        --secondary-color-gradient: hsl(240, 73%, 65%);

        --primary-color-divider: hsl(240, 5%, 91%);

        --box-shadow-light: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
        --radius-corner: 25px;
    }

    #root {
        height: 100vh;
        font-family: var(--ff-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 376px;
        max-width: 1440px;
        margin: 0 auto;
    }

    body {
        background-image: linear-gradient(to bottom, var(--primary-color-gradient), var(--secondary-color-gradient));
        font-size: var(--fs-body);
        font-size: 13px;
    }

    h1 {
        font-size: 2rem;
        margin-bottom: .25em;
        margin-top: .4em;
        
        @media (min-width: 776px) {
            text-align: center;
            padding-left: 5.5em;
        }
    }

    /* activate toggle */
    .accordion_item.active img {
        transform: rotate(180deg);
    }

    .accordion_item.active {
        font-weight: bold;
        color: var(--primary-color-text);
    }

    .answer_wrapper {
        height: 0;
        overflow: hidden;
        transition: height ease .7s;
    }
    .answer_wrapper.open {
        height: 75px;
        color: var(--quaternary-color-text);
    }
`;

export default GlobalStyles;