import styled, {injectGlobal} from "styled-components";
import styledNormalize from "styled-normalize";
import styledReset from 'styled-reset'
import robotoRegular from '../public/fonts/Roboto-Regular.ttf'

injectGlobal`
  ${styledNormalize}
  ${styledReset}
  
  @font-face {
     font-family: 'Roboto', sans-serif;
     src: url(${robotoRegular});
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f3f3f3;
    transition: all 0.5s ease;
  }
  
`;
