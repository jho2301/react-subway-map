import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, div, span, h1, h2, h3,
  h4, h5, h6, p, a, img,b, u, i,
  ol, ul, li, form, label, input,
  article, canvas, figure, figcaption,
  footer, header, nav {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: 'Noto Sans KR', sans-serif;
    vertical-align: baseline;
    user-select: none;
    box-sizing: border-box;
  }

  footer, header, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    outline: none;

    &:visited {
      color: inherit;
    }
  }

  button {
    background: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
  }

  input {
    outline: none;
    border: 0;
  }
`;

export default GlobalStyle;
