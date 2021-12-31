import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Hanuman', serif;
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  .quote {
    position: relative;
    padding: 0.625rem 3.75rem;
    margin: 0;
  }

  .quote-title {
    font-style: italic;
    padding-left: 50px;
    padding-right: 50px;
    font-size: 18px;
  }

  .quote-caption {
    margin-top: 1.5rem;
    font-size: 1.5rem;
    text-align: right;
    font-weight: 700;

    &::before {
      content: "—";
      margin-right: 0.25rem;
      color: var(--color-secondary);
    }
  }
`;
export default GlobalStyle;
