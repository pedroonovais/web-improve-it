import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --primary-color: #0046C7;
        --gray-color: #EFF4F0;
        --dark-gray-color: #D9D9D9;
    }
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        font-family: "Sora", sans-serif;
        font-style: normal;
        font-size: 16px;
    }

    p, h1, h2, h3, h4, h5, h6{
        /* font-weight: 200; */
    }
`;