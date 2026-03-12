export function formatDateString(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'});
}