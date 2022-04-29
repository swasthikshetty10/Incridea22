import { createGlobalStyle } from "styled-components";
import "@fontsource/kaushan-script";
import "@fontsource/sirin-stencil";

import cinzelblack from '../../../fonts/CinzelDecorative-Black.ttf'
import cinzelbold from '../../../fonts/CinzelDecorative-Bold.ttf'
import cinzelregular from '../../../fonts/CinzelDecorative-Regular.ttf'

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family:'CinzelDecorative-Black';
    src:url(${cinzelblack});
 }
 
 @font-face {
     font-family:'CinzelDecorative-Bold';
     src:url(${cinzelbold});
  }
 
  @font-face {
     font-family:'CinzelDecorative-Regular';
     src:url(${cinzelregular});
  }

  
*,*::before,*::after{
    margin: 0;
    padding: 0;
}

body{
    font-family:"Sirin Stencil";
    overflow-x: hidden;
}
h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}

a{
    color: inherit;
    text-decoration: none;
}

main{
    overflow-x: hidden;
}


`
export default GlobalStyles;