import React from 'react';
import styled from "styled-components";
import { TwitterTweetEmbed } from 'react-twitter-embed';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const InnerWrapper = styled.div`
    width: 1px;
    min-width: 500px;

    @media all and (max-width: 600px) {
        min-width: 90%;
    }
`;

export default class Tweet extends React.Component {
    render() {
        return (
            <Wrapper>
                <InnerWrapper><TwitterTweetEmbed tweetId={this.props.tweetId} /></InnerWrapper>
            </Wrapper>
        );
    }
}