import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-width: 400px;
  max-width: 1000px;
  margin: 0 auto;
}

#root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

ul {
  list-style-type: none;
}
`;

export default GlobalStyles;
