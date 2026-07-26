import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

*::before,
*::after {
    box-sizing: border-box;
}

html {
    height: 100%;
}

#root {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100dvh;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    min-width: 0;
    overflow-x: hidden;
}

body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    min-height: 100dvh;
    background: ${({ theme }) => theme.color.background.primary};
}

h1, h2, h3, h4, h5, h6 {
    font-family: "Poppins", sans-serif;
    margin: 0;
    padding: 0;
}

div, p, a, span, ul, li, ol, strong, button, input, textarea, select, option, form, label, legend, fieldset, table, caption, tbody, tfoot, thead, tr, th, td  {
    font-family: "Poppins", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
}
`;
