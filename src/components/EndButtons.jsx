import React from 'react';
import { A } from '../components/default';
import styled from "styled-components";
import Image from "../components/Image";
import { IoIosHome } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { blue, blueHighlight } from '../components/colors';
import { formatTweetIntentUrl } from '../lib/twitter';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: horizontal;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`;

const ButtonStyle = styled.div`
    background-color: ${blue};
    -webkit-transition: 0.2s ease-in-out;
    -moz-transition: 0.2s ease-in-out;
    -o-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;

    &:hover {
        background-color: ${blueHighlight};
    }

    width: 100px;
    padding: 10px 20px;
    text-align: center;
    display: flex;
    flex-direction: vertical;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    &:first-child {
        margin-right: 20px;
    }
`;
const Button = (props) => {
    return (
        <A href={props.url} target={props.newTab ? '_blank' : null}><ButtonStyle>{props.children}</ButtonStyle></A>
    );
};

export default class EndButtons extends React.Component {
    render() {
        const twitterUrl = formatTweetIntentUrl(`Post by @noahsark769: ${this.props.tweetTitle} ${this.props.tweetUrl}`);
        return (
            <Container>
                <Button url={twitterUrl} newTab><FaTwitter size={24} color='white' /></Button>
                <Button url="/blog"><IoIosHome size={24} color='white' /></Button>
            </Container>
        );
    }
};
