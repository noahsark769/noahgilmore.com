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
    console.log(range);
    console.log(s);

    el.setSelectionRange(0, 999999); // A big number, to cover anything that could be inside the element.

    el.contentEditable = oldContentEditable;
    el.readOnly = oldReadOnly;

    document.execCommand('copy');
}

const Container = styled.div`
    width: 960px;
    height: 100vh;
    margin: 0 auto;
`;

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    handleOnClick() {
        let element = this.myRef.current;
        console.log(element);
        iosCopyToClipboard(element);
    }

    render() {
        return <Container>
            <input id="ye" ref={this.myRef} />
            <a onClick={this.handleOnClick.bind(this)}>This is the link</a>
        </Container>
    }

    componentDidMount() {
        ReactGA.initialize('UA-35325391-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }
}

export default IndexPage;
