import React from 'react';

function iosCopyToClipboard(string) {
    let el = document.createElement("input");
    el.value = string;
    el.style = "position: absolute; opacity: 0.0";
    document.body.appendChild(el);
    let range = document.createRange();

    el.contentEditable = true;
    el.readOnly = false;
    range.selectNodeContents(el);

    var s = window.getSelection();
    s.removeAllRanges();
    s.addRange(range);

    // A big number, to cover anything that could be inside the element.
    el.setSelectionRange(0, 999999);

    return document.execCommand('copy');
}

export default class DataLink extends React.Component {
    handleOnClick() {
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
        iosCopyToClipboard(this.props.href + toAppend);
    }

    render() {
        return (
            <a href={this.props.href} onClick={this.handleOnClick.bind(this)}>{this.props.children}</a>
        );
    }
};

export const TrestleBlogPostLink = (props) => {
    return (<DataLink data={{"referrer": "pasteboard-blog-post"}} href={"https://itunes.apple.com/us/app/trestle-the-new-sudoku/id1300230302?mt=8"}>{props.children}</DataLink>);
};