import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    &, &.light-mode {
      --color-text: hsl(200, 15%, 8%);
      --color-bg: hsl(0, 0%, 98%);
      --color-input: hsl(0, 0%, 52%);
      --elements-bg: hsl(0, 0%, 100%);
      /* --elements-bg: green; */
      /* --box-shadow-color: hsl(0, 0%, 52%); */
      --box-shadow-color: hsl(0, 2%, 90%);
    }

    &.dark-mode {
      --color-text: hsl(0, 0%, 100%);
      --color-bg: hsl(207, 26%, 17%);
      --color-input: hsl(0, 0%, 52%);
      --elements-bg: hsl(209, 23%, 22%);
      /* --elements-bg: red; */
      --box-shadow-color:  hsl(200, 15%, 8%);
    }
  }

  #root {
    /* background-color: green; */
    height: 100%;
  }

  html {
  font-size: 62.5%;
  height: 100%;

  @media (max-width: 31.35em) {
    font-size: 53%;
  }
  }

  body {
  font-family: "Nunito Sans", sans-serif;
  color: var(--color-text);
  height: 100%;
  }

  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  * {
    /* border: 1px solid red; */
  }
`;

export default GlobalStyles;
