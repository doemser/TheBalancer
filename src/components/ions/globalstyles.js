import { Global, css } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@900&display=swap");

      :root {
        --primary: #1f1f1f;
        --secondary: #f1f1f1;
        --secondary-light: #cfcfcf;
        --minus-color: #ee5253;
        --plus-color: #10ac84;

        @media (prefers-color-scheme: dark) {
          --primary: #f8f8f2;
          --secondary: #282a36;
          --secondary-light: #44475a;
          --plus-color: #50fa7b;
          --minus-color: #ff5555;
        }
      }

      body {
        margin: 0;
        color: var(--primary);
        background: var(--secondary);
        text-align: center;
        font-family: "Merriweather", serif;
      }
    `}
  />
);

export default GlobalStyles;
