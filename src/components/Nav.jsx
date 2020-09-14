import React from 'react';
import { A, UL, LI } from '../components/default';
import { blue, blueHighlight } from '../components/colors';
import styled from "styled-components";
import { IoIosHome, IoIosAppstore, IoLogoGithub } from "react-icons/io";
import { ImBlog } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";

const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px 60px;

    @media all and (max-width: 600px) {
        padding: 20px;
    }

    @media (prefers-color-scheme: dark) {
        border-color: #777;
    }
`;

const Title = styled.div`
    flex: 2;
    font-family: "Roboto", "Helvetica Neue", "Helvetica", sans-serif;
    font-size: 28px;
    font-display: swap;

    @media (prefers-color-scheme: dark) {
        color: #fff;
    }
`;

const NavLinks = styled(UL)`
    flex: 10;
    display: flex;
    flex-direction: horizontal;
    flex-wrap: wrap;
    justify-content: flex-end;
    height: 100%;
    align-self: center;
`;

const NavLink = styled(LI)`
    display: flex;
    flex-direction: vertical;
    align-items: center;
    text-align: center;
    font-family: "Roboto", "Helvetica Neue", "Helvetica", sans-serif;
    font-size: 16px;
    padding: 0px 20px;
`;

const StyledA = styled(A)`
    height: auto;
    ${(props) => props.blue && `color: ${blue} !important`};
    display: flex;
    flex-direction: vertical;
    align-items: center;

    -webkit-transition: 0.2s ease-in-out;
    -moz-transition: 0.2s ease-in-out;
    -o-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;

    &:hover {
        ${(props) => props.blue && `color: ${blueHighlight} !important`};
    }
`;

const Nav = (props) => {
    return (
        <StyledNav>
            <Title><StyledA href={props.blog ? '/blog' : '/'}>NOAH GILMORE</StyledA></Title>
            <NavLinks>
                <NavLink title="Site Home"><StyledA aria-label="Home" href="/"><IoIosHome color={blue} size="24" /></StyledA></NavLink>
                <NavLink title="Blog"><StyledA aria-label="Blog" href="/blog"><ImBlog color={blue} size="24" /></StyledA></NavLink>
                <NavLink title="Twitter"><StyledA aria-label="Twitter" href="https://twitter.com/noahsark769"><FaTwitter color={blue} size="24" /></StyledA></NavLink>
                <NavLink title="GitHub" className="hidden md:flex"><StyledA aria-label="GitHub" href="https://github.com/noahsark769"><IoLogoGithub color={blue} size="24" /></StyledA></NavLink>
                <NavLink title="App Store"><StyledA aria-label="App Store" href="https://apps.apple.com/us/app/cifilter-io/id1457458557"><IoIosAppstore color={blue} size="24" /></StyledA></NavLink>
            </NavLinks>
        </StyledNav>
    );
};

export default Nav;