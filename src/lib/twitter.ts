export function formatTweetIntentUrl(text: string) {
    const encodedText = encodeURIComponent(text);
    return `https://twitter.com/intent/tweet?text=${encodedText}`;
}