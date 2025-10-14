import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
margin: 0;
padding: 0;
font-family: 'Cormorant Garamond', serif;
background-color: #fff8f0;
color: #3a3a3a;
}
h1, h2, h3 {
font-family: 'Playfair Display', serif;
margin: 0;
}
p {
line-height: 1.6;
margin-bottom: 1em;
}
`;