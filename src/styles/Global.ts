import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@font-face {
	font-family: IRANSans;
	font-style: normal;
	font-weight: 900;
	src:url('./fonts/iransans/IRANSansWeb(FaNum)_Black.woff') format('woff')
}
@font-face {
	font-family: IRANSans;
	font-style: normal;
	font-weight: bold;
	src: url('./fonts/iransans/IRANSansWeb(FaNum)_Bold.woff') format('woff')  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/

}
@font-face {
	font-family: IRANSans;
	font-style: normal;
	font-weight: 500;
	src: url('./fonts/iransans/IRANSansWeb(FaNum)_Medium.woff') format('woff')  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/

}
@font-face {
	font-family: IRANSans;
	font-style: normal;
	font-weight: 300;
	src: url('./fonts/iransans/IRANSansWeb(FaNum)_Light.woff') format('woff')  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/

}
@font-face {
	font-family: IRANSans;
	font-style: normal;
	font-weight: normal;
	src: url('./fonts/iransans/IRANSansWeb(FaNum).woff') format('woff')  /* FF39+,Chrome36+, Opera24+*/
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  font-family: iranSans, sans-serif;
  line-height: 1.5;
}

body {
  background: #F2F2F2
}

a {
  color: inherit;
  text-decoration: none;
}
`;
