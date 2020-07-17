import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    p, li {
        margin: 0;
        padding: 0;
        font-family: "Merriweather", times, serif;
        font-size: 18px;
        line-height: 29px;
        color: #333;
        padding-bottom: 15px;
        margin-top: 15px;
        @media all and (max-width: 600px) {
            width: 90%;
            margin: 15px auto 0 auto;
        }

        @media (prefers-color-scheme: dark) {
            color: #fff;
        }
    }

    blockquote {
        background-color: #faf9f7;
        border-left: 4px solid #e5e4e1;
        padding: 20px;
        font-style: italic;

        @media (prefers-color-scheme: dark) {
            background-color: #3f3f3f;
        }

        p {
            margin: 0;
            padding: 0;
            color: #555;

            @media (prefers-color-scheme: dark) {
                color: #fff;
            }
        }
    }

    a {
        color: #1A3F4B;
        -webkit-transition: 0.2s ease-in-out;
        -moz-transition: 0.2s ease-in-out;
        -o-transition: 0.2s ease-in-out;
        transition: 0.2s ease-in-out;

        @media (prefers-color-scheme: dark) {
            color: #60b5d1;
        }
    }
    a:hover {
        color: #47656E;

        @media (prefers-color-scheme: dark) {
            color: #6bcfef;
        }
    }

    code {
        font-family: monospace;
        font-size: 16px;
        padding: 3px 5px;
        margin: 0px 2px;

        @media (prefers-color-scheme: dark) {
            color: #fff;
        }
    }

    // For inline markdown (one-backtick) code
    code:not(.vscode-highlight-code) {
        font-family: monospace;
        font-size: 16px;
        background-color: #faf9f7;
        border: 1px solid #e5e4e1;
        padding: 3px 5px;
        margin: 0px 2px;
        color: #555;

        @media (prefers-color-scheme: dark) {
            color: #fff;
            background-color: #3f3f3f;
        }
    }
    code:first-child {
        margin-left: 0;
    }
    pre {
        display: block;
        margin: 0;
        padding: 0;
        margin-top: 10px;
        border: 1px solid #e5e4e1;
        border-radius: 2px;
        @media all and (max-width: 600px) {
            width: 100%;
            margin: 10px auto 0 auto;
            border-left: none;
            border-right: none;
            border-radius: 0;
            overflow-x: scroll;
        }
    }
    pre > code {
        display: block;
        margin: 0;
        padding: 10px;
        font-family: monospace;
        font-size: 14px;
        line-height: 17px;
        white-space: pre-wrap;

        @media all and (max-width: 600px) {
            font-size: 15px;
            white-space: pre;
            padding: 15px 5% 15px 5%;
            width: 100%;
        }
    }

    // pre > code.language-nohighlight {
    //     @media (prefers-color-scheme: dark) {
    //         color: #fff;
    //         background-color: #3f3f3f;
    //     }
    // }

    pre + p {
        margin-top: 30px;
    }
    ol {
        margin-left: 30px;
        @media all and (max-width: 600px) {
            width: 90%;
            margin: 0 auto 0 30px;
        }

        @media (prefers-color-scheme: dark) {
            color: #fff;
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

        @media (prefers-color-scheme: dark) {
            color: #fff;
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

        @media (prefers-color-scheme: dark) {
            color: #fff;
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
}