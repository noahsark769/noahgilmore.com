import React from 'react';
import { Helmet } from "react-helmet";
import { Div, A, GlobalStyle } from '../../components/default';
import styled from "styled-components";
import Nav from '../../components/Nav';


class IndexPage extends React.Component {
    constructor() {
        super();
        this.state = {
            component: "home"
        };
    }

    handleContentChange(section) {
        this.setState({ component: section })
    }

    render() {
        return <div>
            <GlobalStyle />
            <Helmet>
                <link href='http://fonts.googleapis.com/css?family=Roboto:700' rel='stylesheet' type='text/css' />
            </Helmet>
            <Nav />
        </div>
    }
}

export default IndexPage;
