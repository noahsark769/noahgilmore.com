import React from 'react'

function iosCopyToClipboard(string: string) {
    let el = document.createElement("input");
    el.value = string;
    el.style.cssText = "position: absolute; top: 0; left: 0; width: 100%; font-size: 0; opacity: 0.0";
    document.body.appendChild(el);
    let range = document.createRange();

    el.contentEditable = "true";
    el.readOnly = false;
    range.selectNodeContents(el);

    var s = window.getSelection();
    s?.removeAllRanges();
    s?.addRange(range);

    // A big number, to cover anything that could be inside the element.
    el.setSelectionRange(0, 999999);

    return document.execCommand('copy');
}

function DataLink({ href, data, children }: React.PropsWithChildren<{
    href: string
    data: Record<string, string>
}>) {
    const handleOnClick = () => {
        let jsonData = {
            timestamp: Date.now(),
            ...data
        }
        let json = JSON.stringify(jsonData);
        let encoded = btoa(json)
        let toAppend;
        if (href.includes("?")) {
            toAppend = "&ed=" + encoded
        } else {
            toAppend = "?ed=" + encoded
        }
        iosCopyToClipboard(href + toAppend);
        document.querySelectorAll("a.data-link").forEach(function(el) {
            (el as HTMLAnchorElement).href = (el as HTMLAnchorElement).href + "&retry=1"
        });
    }

    return (
        <a className={"data-link"} href={href} onClick={handleOnClick}>{children}</a>
    );
}

export default DataLink;

export const TrestleBlogPostLink = ({ children }: React.PropsWithChildren) => {
    return (<DataLink data={{"referrer": "pasteboard-blog-post"}} href={"https://itunes.apple.com/us/app/trestle-the-new-sudoku/id1300230302?mt=8"}>{children}</DataLink>);
};
