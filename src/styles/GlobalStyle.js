import styled, { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

@font-face {
  font-family: "Helvetica Neue";
  src:url('../fonts/helveticaneue.ttf') format('ttf'),
       url('../fonts/helveticaneue-medium.ttf') format('ttf'),
     url('../fonts/helveticaneue-bold.ttf') format('ttf');
  /* Add additional font formats if necessary */
  /* Specify the correct path to the font files */
}

/* @font-face {
  font-display: swap; 
  font-family: 'HelveticaNeue';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/helveticaneue.ttf') format('ttf');
}

@font-face {
  font-display: swap; 
  font-family: 'HelveticaNeue';
  font-style: normal;
  font-weight: 500;
  src: url('../fonts/helveticaneue-medium.ttf') format('ttf');
}

@font-face {
  font-display: swap; 
  font-family: 'HelveticaNeue';
  font-style: bold;
  font-weight: 700;
  src: url('../fonts/helveticaneue-bold.ttf') format('ttf');
}
 */

*,
*::before,
*::after {
  box-sizing: inherit;
}
p,
h1,
h2,
h3,
ol,
ul,
fieldset,
input,
button,
textarea {
  margin: 0;
  padding: 0;
}

ol,
ul {
  list-style: none;
}

button {
  cursor: pointer;

}

img {
  display: block;
  max-width: 100%;
}


body {
  margin: 0 ;
   font-family: "Helvetica Neue", sans-serif;
  color: black;
background-color: #f3f3f3;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

`;

export const Container = styled.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    padding: 0 20px;
    margin: 90px auto;
  }

  @media screen and (min-width: 375px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    padding: 0 90px;
    margin: 150px auto;
  }
`;
