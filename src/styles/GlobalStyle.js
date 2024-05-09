import styled, { createGlobalStyle } from "styled-components";
import "modern-normalize";

import Helvetica from "../fonts/HelveticaNeue.ttf";
import HelveticaMedium from "../fonts/HelveticaNeueCyr-Medium.ttf";
import HelveticaBold from "../fonts/HelveticaNeueCyr-Bold.ttf";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
  }


  @font-face {
  font-family: "Helvetica";
  src: url(${Helvetica}) format('truetype');
  font-weight: normal; 
  font-style: normal;
}

@font-face {
  font-family: "Helvetica";
  src: url(${HelveticaMedium}) format('truetype');
  font-weight: 500; 
  font-style: normal;
}

@font-face {
  font-family: "Helvetica";
  src: url(${HelveticaBold}) format('truetype');
  font-weight: 700; 
  font-style: normal;
}

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
    margin: 0;
    font-family: "Helvetica", sans-serif; /* Fallback fonts */
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

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 132px;
    margin: 150px auto;
  }
`;
