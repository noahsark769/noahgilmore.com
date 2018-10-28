import React from 'react';
import { A, UL, LI } from '../components/default';
import styled from "styled-components";

const StyledNav = styled.nav`
    display: flex;
    flex-direction: horizontal;
    flex-wrap: wrap;
    padding: 20px 60px;
    border-bottom: 1px solid #ddd;
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
`;

const NavLink = styled(LI)`
    display: flex;
    flex-direction: horizontal;
    text-align: center;
    font-family: "Bariol", "Helvetica Neue", "Helvetica", sans-serif;
    font-size: 16px;
    padding: 0px 20px;
`;

const StyledA = styled(A)`
    height: auto;
    color: rgba(128, 165, 177, 1);

    &:hover {
        color: rgba(151, 195, 210, 1);
    }
`;

const Nav = (props) => {
    return (
        <StyledNav>
            <Title>NOAH GILMORE</Title>
            <NavLinks>
                <NavLink><StyledA href="/">HOME</StyledA></NavLink>
                <NavLink><StyledA href="/blog/">POSTS</StyledA></NavLink>
            </NavLinks>
        </StyledNav>
    );
};

export default Nav;