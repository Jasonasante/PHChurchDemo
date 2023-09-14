export function DateConversion(dateStr) {
    const date = new Date(dateStr);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    const formattedDate = date.toLocaleDateString('en-UK', options);
    return formattedDate
}