export function formatTweetIntentUrl(text) {
    console.log("Encoding");
    console.log(text);
    const encodedText = encodeURIComponent(text);
    console.log("Encoded");
    console.log(encodedText);
    return `https://twitter.com/intent/tweet?text=${encodedText}`;
}