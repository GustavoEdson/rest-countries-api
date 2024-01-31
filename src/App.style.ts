import { createGlobalStyle } from "styled-components";
import RobotoFlex from "../static/fonts/Roboto_Flex/RobotoFlex-VariableFont_GRAD,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght.ttf";

export const AppGlobalStyle = createGlobalStyle`

:root {
    --primary: #fff;
    --secondary: #2B3743;
}

 body {
        background: var(--secondary);
        margin: 0;
        padding: 0;
        font-family: "Roboto Flex";
        background: black;
    }


    @font-face {
        font-family: "Roboto Flex";
        src: local("Roboto_Flex"),
        url(${RobotoFlex});

    }

`;
