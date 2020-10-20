import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import bariol_eot from '../fonts/Bariol-Regular.eot';
import bariol_woff from '../fonts/Bariol-Regular.woff';
import bariol_ttf from '../fonts/Bariol-Regular.ttf';
import bariol_svg from '../fonts/Bariol-Regular.svg';

export const colors = {
    darkBackground: `#23282f`,
    secondaryDarkBackground: `#2b2c2f`
};

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Bariol';
        src: url('${bariol_eot}');
        src: url('${bariol_eot}?#iefix') format('embedded-opentype'),
             url('${bariol_woff}') format('woff'),
             url('${bariol_ttf}') format('truetype'),
             url('${bariol_svg}#svgBariolRegular') format('svg');
    }

    * {
        box-sizing: border-box !important;
    }

    body {
        margin: 0;
        padding: 0;
    }
`;

// Some styles are duplicated here because including two createGlobalStyle components in
// the same component tree doesn't seem to work...
export const BlogGlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Bariol';
        src: url('${bariol_eot}');
        src: url('${bariol_eot}?#iefix') format('embedded-opentype'),
            url('${bariol_woff}') format('woff'),
            url('${bariol_ttf}') format('truetype'),
            url('${bariol_svg}#svgBariolRegular') format('svg');
    }

    * {
        box-sizing: border-box !important;
    }

    body {
        margin: 0;
        padding: 0;
    }

    @media (prefers-color-scheme: dark) {
        html, body {
            background-color: ${colors.darkBackground};
        }
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
    &, &:hover, &:focus {
        outline: none;
        color: inherit;
        text-decoration: none;
    }
`;

export const HighlightedA = styled.a`
&, &:hover, &:focus {
    color: #1A3F4B;
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