import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`

* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

:root {
  --primary: rgb(44, 86, 139);
  --black: #000010;
  --blackLighter: #9E9E9E;
  --grayLight: #F5F5F5;
  --grayMedium: #e5e5e5; 
  --white: #FFFFFF;
  --frontEnd: #6BD1FF;
  --backEnd: #00C86F;
}

html,
body {
  margin: 0;
  padding: 0;
  background-color: #141414;
}

a {
  color: inherit;
} 

`;