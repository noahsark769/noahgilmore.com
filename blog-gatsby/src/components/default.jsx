import React from 'react';
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import bariol_eot from '../fonts/Bariol-Regular.eot';
import bariol_woff from '../fonts/Bariol-Regular.woff';
import bariol_ttf from '../fonts/Bariol-Regular.ttf';
import bariol_svg from '../fonts/Bariol-Regular.svg';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Bariol';
        src: url('${bariol_eot}');
        src: url('${bariol_eot}?#iefix') format('embedded-opentype'),
             url('${bariol_woff}') format('woff'),
             url('${bariol_ttf}') format('truetype'),
             url('${bariol_svg}#svgBariolRegular') format('svg');
    }
`;

export const Div = styled.div`
`

export const A = styled.a`
    &, &:hover, &:focus {
        outline: none;
        color: inherit;
        text-decoration: none;
    }
`