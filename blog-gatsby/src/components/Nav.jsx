import React from 'react';
import { A, UL, LI } from '../components/default';
import styled from "styled-components";

const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px 60px;
    border-bottom: 1px solid #ddd;

    @media all and (max-width: 600px) {
        flex-direction: column;
        padding: 20px 20px 10px 20px;
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

    @media all and (max-width: 600px) {
        justify-content: flex-start;
    }
`;

const NavLink = styled(LI)`
    display: flex;
    flex-direction: horizontal;
    text-align: center;
    font-family: "Bariol", "Helvetica Neue", "Helvetica", sans-serif;
    font-size: 16px;
    padding: 0px 20px;

    @media all and (max-width: 600px) {
        display: block;
        width: 100%;
        font-size: 20px;
        margin: 5px 0px;
        padding: 10px 10px;
        background-color: #eee;
    }
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

    @media all and (max-width: 600px) {
        width: 100%;
    }
`;

const Nav = (props) => {
    return (
        <StyledNav>
            <Title><StyledA href='/'>NOAH GILMORE</StyledA></Title>
            <NavLinks>
                <NavLink><StyledA href="/">HOME</StyledA></NavLink>
                <NavLink><StyledA href="/blog/">POSTS</StyledA></NavLink>
            </NavLinks>
        </StyledNav>
    );
};

export default Nav;