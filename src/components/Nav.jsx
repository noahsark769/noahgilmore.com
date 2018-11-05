import React from 'react';
import { A, UL, LI } from '../components/default';
import styled from "styled-components";
import { IoIosHome } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";

const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px 60px;
    border-bottom: 1px solid #ddd;

    @media all and (max-width: 600px) {
        padding: 20px;
    }
`;

const Title = styled.div`
    flex: 2;
    font-family: "Roboto", "Helvetica Neue", "Helvetica", sans-serif;
    font-size: 28px;
`;

const NavLinks = styled(UL)`
    flex: 10;
    display: flex;
    flex-direction: horizontal;
    flex-wrap: wrap;
    justify-content: flex-end;
    height: 100%;
`;

const NavLink = styled(LI)`
    display: flex;
    flex-direction: vertical;
    align-items: center;
    text-align: center;
    font-family: "Bariol", "Helvetica Neue", "Helvetica", sans-serif;
    font-size: 16px;
    padding: 0px 20px;
`;

const StyledA = styled(A)`
    height: auto;
    color: rgba(128, 165, 177, 1);

    -webkit-transition: 0.2s ease-in-out;
    -moz-transition: 0.2s ease-in-out;
    -o-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;

    &:hover {
        color: rgba(151, 195, 210, 1);
    }
`;

const MediaOnlySmall = styled.div`
    display: none;
    @media all and (max-width: 600px) {
        display: inline-block;
    }
`;

const MediaOnlyLarge = styled.div`
    display: inline-block;
    @media all and (max-width: 600px) {
        display: none;
    }
`;

const Nav = (props) => {
    return (
        <StyledNav>
            <Title><StyledA href={props.blog ? '/blog' : '/'}>NOAH GILMORE</StyledA></Title>
            <MediaOnlyLarge>
                <NavLinks>
                    <NavLink><StyledA href="/blog/">POSTS</StyledA></NavLink>
                    <NavLink><StyledA href="https://twitter.com/noahsark769">TWITTER</StyledA></NavLink>
                </NavLinks>
            </MediaOnlyLarge>
            <MediaOnlySmall>
                <NavLinks>
                    <NavLink><StyledA href="/blog"><IoIosHome color="rgba(128, 165, 177, 1)" size="24" /></StyledA></NavLink>
                    <NavLink><StyledA href="https://twitter.com/noahsark769"><FaTwitter color="rgba(128, 165, 177, 1)" size="24" /></StyledA></NavLink>
                </NavLinks>
            </MediaOnlySmall>
        </StyledNav>
    );
};

export default Nav;