import React from 'react';
import styled from "styled-components";
import Image from "../components/Image";

const Container = styled.div`
    margin: 20px 0;
`;

const Caption = styled.div`
    font-family: "Gentium Book Basic", times, serif;
    font-style: italic;
    font-size: 16px;
    color: #999;
    margin-bottom: 30px;

    img {
        width: 100%;
        margin-bottom: 10px;   
    }
`;

export default class CaptionedImage extends React.Component {
    render() {
        return (
            <Container>
                <Image filename={this.props.filename} alt={this.props.alt} />
                <Caption>{this.props.caption}</Caption>
            </Container>
        );
    }
};
