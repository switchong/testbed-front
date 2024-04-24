import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({theme} : {theme:any}) => theme.bgColor};
        margin: 0;
        padding: 0;
        transition: all 0.25s linear;
        color: ${({theme} : {theme:any}) => theme.textColor};
        box-sizing: border-box;
        display: flex;
    }

    botton {
        cursor: pointer;
        border: none;
        outline: none;
        color: ${({theme} : {theme:any}) => theme.bgColor};
        background-color: ${({theme} : {theme:any}) => theme.textColor};
    }
`;

export default GlobalStyle