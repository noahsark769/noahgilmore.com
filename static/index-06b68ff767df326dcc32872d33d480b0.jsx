import React from 'react';
import styled from "styled-components";
import ReactGA from 'react-ga';

function iosCopyToClipboard(el) {
    var oldContentEditable = el.contentEditable,
        oldReadOnly = el.readOnly,
        range = document.createRange();

    el.contentEditable = true;
    el.readOnly = false;
    range.selectNodeContents(el);

    var s = window.getSelection();
    s.removeAllRanges();
    s.addRange(range);

    el.setSelectionRange(0, 999999); // A big number, to cover anything that could be inside the element.

    el.contentEditable = oldContentEditable;
    el.readOnly = oldReadOnly;

    return document.execCommand('copy');
}

const Container = styled.div`
    width: 960px;
    height: 100vh;
    margin: 0 auto;
`;

class TrackingLink extends React.Component {
    handleOnClick() {
        let element = document.createElement("input");
        let data = {
            timestamp: Date.now(),
            ...this.props.data
        }
        let json = JSON.stringify(data);
        let encoded = btoa(json)
        let toAppend;
        if (this.props.href.includes("?")) {
            toAppend = "&ed=" + encoded
        } else {
            toAppend = "?ed=" + encoded
        }
        element.value = this.props.href + toAppend;
        element.style = "position: absolute; opacity: 0.0"
        document.body.appendChild(element);
        iosCopyToClipboard(element);
    }

    render() {
        return (
            <a href={this.props.href} onClick={this.handleOnClick.bind(this)}>{this.props.children}</a>
        );
    }
};

class IndexPage extends React.Component {
    render() {
        return <Container>
            <TrackingLink data={{"referrer": "pasteboard-blog-post"}} href="https://itunes.apple.com/us/app/trestle-the-new-sudoku/id1300230302?mt=8">This is the link</TrackingLink>
        </Container>
    }

    componentDidMount() {
        ReactGA.initialize('UA-35325391-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }
}

export default IndexPage;
