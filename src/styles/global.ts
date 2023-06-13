import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus:not(.cl-modalContent){
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
  }
  body {
    background-color: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased
  }
  body, input, textarea, button{
    font: 400 1rem Roboto, sans-serif;
  }
  .cl-internal-q6wheb, 
  .cl-internal-b3fm6y{
    display: none
  }
  .cl-internal-k5atl{
    color: ${(props) => props.theme['gray-100']};
  }

`
