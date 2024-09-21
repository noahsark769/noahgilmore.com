import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const colors = {
  darkBackground: `#23282f`,
  secondaryDarkBackground: `#2b2c2f`
};

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Bariol';
        src: url('/fonts/Bariol-Regular.otf');
        src: url('/fonts/Bariol-Regular.eot?#iefix') format('embedded-opentype'),
             url('/fonts/Bariol-Regular.woff') format('woff'),
             url('/fonts/Bariol-Regular.ttf') format('truetype'),
             url('/fonts/Bariol-Regular.svg#svgBariolRegular') format('svg');
    }

    * {
        box-sizing: border-box !important;
    }
`;

// Some styles are duplicated here because including two createGlobalStyle components in
// the same component tree doesn't seem to work...
export const BlogGlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Bariol';
        src: url('/fonts/Bariol-Regular.otf');
        src: url('/fonts/Bariol-Regular.eot?#iefix') format('embedded-opentype'),
            url('/fonts/Bariol-Regular.woff') format('woff'),
            url('/fonts/Bariol-Regular.ttf') format('truetype'),
            url('/fonts/Bariol-Regular.svg#svgBariolRegular') format('svg');
    }

    * {
        box-sizing: border-box !important;
    }

    body {
        margin: 0;
        padding: 0;
    }
`;

export const Div = styled.div``;
export const Nav = styled.nav``;
export const UL = styled.ul`
  margin: 0;
  padding: 0;
`;
export const LI = styled.li`
  margin: 0;
  padding: 0;
`;
export const P = styled.p`
  margin: 0;
  padding: 0;
`;

export const A = styled.a`
  &,
  &:hover,
  &:focus {
    outline: none;
    color: inherit;
    text-decoration: none;
  }
`;

export const HighlightedA = styled.a`
  &,
  &:hover,
  &:focus {
    color: #1a3f4b;
    -webkit-transition: 0.2s ease-in-out;
    -moz-transition: 0.2s ease-in-out;
    -o-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;

    @media (prefers-color-scheme: dark) {
      color: #60b5d1;
    }

    outline: none;
    text-decoration: underline;
  }
`;
