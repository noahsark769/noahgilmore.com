import React from 'react';

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

    return document.execCommand('copy');
}

export default class DataLink extends React.Component {
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

export const TrestleBlogPostLink = (props) => {
    return (<DataLink data={{"referrer": "pasteboard-blog-post"}} href={"https://itunes.apple.com/us/app/trestle-the-new-sudoku/id1300230302?mt=8"}>{props.children}</DataLink>);
};