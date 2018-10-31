import React from 'react';
import ReactDOM from "react-dom";
import { Div, A } from '../components/default';
import styled, { css } from "styled-components";
import ReactMarkdown from 'react-markdown';
import { Helmet } from "react-helmet";

const Container = styled.div`
    .format-post-preview p, .format-post-preview li {
        font-family: "Open Sans", arial, sans-serif;
        font-size: 14px;
        line-height: 14px;
        line-height: 18px;
        margin-top: 10px;
        padding-bottom: 10px;
    }
    .format-post-preview p + p {
        margin-top: 0;
    }
    .format-post-preview pre > code {
        font-size: 12px;
        line-height: 12px;
        margin-top: 0;
        margin-bottom: 0;
    }
    p, li {
        margin: 0;
        padding: 0;
        font-family: "Gentium Book Basic", times, serif;
        font-size: 21px;
        line-height: 26px;
        color: #333;
        padding-bottom: 15px;
        margin-top: 15px;
    }
    a {
        color: #1A3F4B;
    }
    code {
        font-family: monospace;
        font-size: 16px; 
    }
    pre {
        display: block;
        margin: 0;
        padding: 0;
        background: none;
    }
    pre > code {
        display: block;
        margin: 0;
        padding: 0;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 10px;
        margin-top: 10px;
        font-family: monospace;
        font-size: 14px;
        white-space: pre-wrap;
    }

    pre > code.hljs {
        border: none;
    }
    pre + p {
        margin-top: 30px;
    }
    ol {
        margin-left: 30px;
    }
    ol li {
        list-style-type: decimal;
    }
    ul li {
        list-style-type: square;
        margin-left: 40px;
    }
    h1, h2, h3, h4, h5, h6 {
        width: 100%;
        font-family: "Roboto", "Helvetica Neue", "Helvetica", sans-serif;
        margin-bottom: 10px;   
        margin-top: 40px;
    }
    h1 {
        font-size: 28px;
    }
    h2 {
        font-size: 24px;
    }
    h3 {
        font-size: 20px;
    }
`;

export default class MarkdownContent extends React.Component {
    render() {
        return (
            <Container>
                {this.props.children}
            </Container>
        );
    }

    componentDidMount() {
        const node = ReactDOM.findDOMNode(this);
        var elements = node.querySelectorAll("pre code");
        // this next line has to be stuck in the 90's
        // https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/
        console.log("HEYYYY YAAAAAA");
        console.log(elements);
        for (var i = 0; i < elements.length; i++) {
            // I would love to import the node version of hljs here, but it turns out
            // this doesn't work due to something in gatsby-mdx's rendering. Oh well,
            // we just import it in html.js and use the window version here.
            window.hljs.highlightBlock(elements[i]);
        }
    }
}