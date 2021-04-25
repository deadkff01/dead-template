import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html,
  body,
  #__next {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  body.fontLoaded {
    font-family: 'Averta Std';
  }
`;
