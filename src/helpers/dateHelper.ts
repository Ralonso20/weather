//function to convert unix timestamp to date and time utc format, remove gmt text and time without miliseconds and return string
export function convertMillisecondsToDateAndTime(milliseconds: number): string {
    return new Date(milliseconds * 1000).toUTCString().replace("GMT", "").slice(0, -4);
}

