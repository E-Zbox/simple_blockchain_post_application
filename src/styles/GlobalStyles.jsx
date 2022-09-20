import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        font-family: "Calibri Light";
        font-size: 1.05rem;
        font-weight: 600;
        box-sizing: border-box;

        // padding in pixels
        --three-px: 3px;
        --seven-px: 7px;
        --ten-px: 10px;

        @media (max-width: 400px) {
            font-size: 1rem;
            font-weight: light;
        }
    }
    body {
        width: fit-content;
        height: fit-content;

        main#root {
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #66ccee65;
            overflow: hidden;
            box-sizing: border-box;
        }
    }
`;
