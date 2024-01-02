export function earthYearsTill(futureAge, currentAge) {
    return futureAge - currentAge;
}

export function mercuryYearsTill(futureAge, currentAge) {
    const earthYrsTill = earthYearsTill(futureAge, currentAge);
    return parseFloat((earthYrsTill / 0.24).toFixed(2));
}

export function venusYearsTill(futureAge, currentAge) {
    const earthYrsTill = earthYearsTill(futureAge, currentAge);
    return parseFloat((earthYrsTill / 0.62).toFixed(2));
}

export function marsYearsTill(futureAge, currentAge) {
    const earthYrsTill = earthYearsTill(futureAge, currentAge);
    return parseFloat((earthYrsTill / 1.88).toFixed(2));

}

export function jupiterYearsTill(futureAge, currentAge) {
    const earthYrsTill = earthYearsTill(futureAge, currentAge);
    return parseFloat((earthYrsTill / 11.86).toFixed(2));

}