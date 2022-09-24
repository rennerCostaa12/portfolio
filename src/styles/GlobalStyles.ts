import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --body-bg-color: #22212C;
        --text-color: #837E9F;
        --bg-cards: #302F3D;
        --bg-techs: #CB92B1;
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Merriweather Sans', sans-serif;

        ::-webkit-scrollbar {
            width: 5px;
            border-radius: 50px !important;
        }

        ::-webkit-scrollbar-thumb {
            background: #7ed957;
            border-radius: 50px !important;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #63e62b;
        }
    }

    body{
        padding: 1.8rem;
        background-color: var(--body-bg-color);
        color: var(--text-color);
    }

`

export default GlobalStyle