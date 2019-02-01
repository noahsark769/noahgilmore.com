import React from 'react';
import ReactDOM from "react-dom";
import styled from "styled-components";

const Container = styled.div`
    p, li {
        margin: 0;
        padding: 0;
        font-family: "Gentium Book Basic", times, serif;
        font-size: 21px;
        line-height: 29px;
        color: #333;
        padding-bottom: 15px;
        margin-top: 15px;
        @media all and (max-width: 600px) {
            width: 90%;
            margin: 15px auto 0 auto;
        }
    }

    blockquote {
        background-color: #faf9f7;
        border-left: 4px solid #e5e4e1;
        padding: 20px;
        font-style: italic;

        p {
            margin: 0;
            padding: 0;
            color: #555;
        }
    }

    a {
        color: #1A3F4B;
        -webkit-transition: 0.2s ease-in-out;
        -moz-transition: 0.2s ease-in-out;
        -o-transition: 0.2s ease-in-out;
        transition: 0.2s ease-in-out;
    }
    a:hover {
        color: #47656E;
    }
    code {
        font-family: monospace;
        font-size: 16px;
        background-color: #faf9f7;
        border: 1px solid #e5e4e1;
        padding: 3px 5px;
        margin: 0px 2px;
        color: #555;
    }
    code:first-child {
        margin-left: 0;
    }
    pre {
        display: block;
        margin: 0;
        padding: 0;
        background: none;
        @media all and (max-width: 600px) {
            width: 100%;
            margin: 0 auto;
        }
    }
    pre > code {
        display: block;
        margin: 0;
        padding: 0;
        border: 1px solid #e5e4e1;
        border-radius: 2px;
        padding: 10px;
        margin-top: 10px;
        font-family: monospace;
        font-size: 14px;
        line-height: 17px;
        white-space: pre-wrap;

        @media all and (max-width: 600px) {
            font-size: 15px;
            white-space: pre;
            border-left: none;
            border-right: none;
            padding: 15px 5% 15px 5%;
            width: 100%;
        }
    }

    pre + p {
        margin-top: 30px;
    }
    ol {
        margin-left: 30px;
        @media all and (max-width: 600px) {
            width: 90%;
            margin: 0 auto 0 30px;
        }
    }
    ol li {
        list-style-type: decimal;
    }
    ul li {
        list-style-type: square;
        margin-left: 40px;
        @media all and (max-width: 600px) {
            width: 90%;
            margin: 0 auto;
        }
    }
    h1, h2, h3, h4, h5, h6 {
        width: 100%;
        font-family: "Roboto", "Helvetica Neue", "Helvetica", sans-serif;
        margin-bottom: 10px;   
        margin-top: 40px;
        @media all and (max-width: 600px) {
            width: 90%;
            margin: 40px auto 10px auto;
        }
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

    em {
        font-style: italic;
    }

    strong {
        font-weight: bold;
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
        for (var i = 0; i < elements.length; i++) {
            // I would love to import the node version of hljs here, but it turns out
            // this doesn't work due to something in gatsby-mdx's rendering. Oh well,
            // we just import it in html.js and use the window version here.
            window.hljs.highlightBlock(elements[i]);
        }
    }
}