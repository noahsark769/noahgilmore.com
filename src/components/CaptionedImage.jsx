import React from 'react';
import styled from "styled-components";
import Image from "../components/Image";

const Wrap = styled.div`
    display: flex;
    margin: 20px 0;
    justify-content: center;
`;

const Container = styled.div`
    flex: 1;
    ${props => props.max ? "max-width: " + props.max + "px" : ""};
`;

const Caption = styled.div`
    font-family: "Gentium Book Basic", times, serif;
    font-style: italic;
    font-size: 16px;
    color: #999;
    margin-bottom: 30px;
    margin-top: 12px;
    text-align: center;

    img {
        width: 100%;
        margin-bottom: 10px;   
    }
`;

export default class CaptionedImage extends React.Component {
    render() {
        return (
            <Wrap>
                <Container max={this.props.max}>
                    <Image filename={this.props.filename} alt={this.props.alt} />
                    <Caption>{this.props.caption}</Caption>
                </Container>
            </Wrap>
        );
    }
};
