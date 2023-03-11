import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: min(1000px, 100vw);
      min-height: 100vh;
  margin: 0 auto;
  padding: 1rem;
}

#root {
box-shadow: 0 0 5px 3px lightgray;
}
`;

export default GlobalStyles;
