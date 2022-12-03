import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 10px;
    }

    body {
        background-color: ${(props) => props.theme['base-background']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1.6rem "Nunito", sans-serif;
    }
`
