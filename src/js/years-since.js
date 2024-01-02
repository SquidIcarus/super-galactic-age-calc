export function earthYearsSince(currentAge, pastAge) {
    return currentAge - pastAge;
}

export function mercuryYearsSince(currentAge, pastAge) {
    const earthYrsPassed = earthYearsSince(currentAge, pastAge);
    return parseFloat((earthYrsPassed / 0.24).toFixed(2));

}

export function venusYearsSince(currentAge, pastAge) {
    const earthYrsPassed = earthYearsSince(currentAge, pastAge);
    return parseFloat((earthYrsPassed / 0.62).toFixed(2));
}

export function marsYearsSince(currentAge, pastAge) {
    const earthYrsPassed = earthYearsSince(currentAge, pastAge);
    return parseFloat((earthYrsPassed / 1.88).toFixed(2));

}

export function jupiterYearsSince(currentAge, pastAge) {
    const earthYrsPassed = earthYearsSince(currentAge, pastAge);
    return parseFloat((earthYrsPassed / 11.86).toFixed(2));

}