import React from 'react';
import styled from "styled-components";
import { TwitterTweetEmbed } from 'react-twitter-embed';

const Wrapper = styled.div`
    width: 100%;
    text-align: center;
`;

const InnerWrapper = styled.div`
    display: inline-block;
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