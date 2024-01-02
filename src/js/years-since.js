export function earthYearsSince(currentAge, pastAge) {
    return currentAge - pastAge;
}

export function mercuryYearsSince(currentAge, pastAge) {
    const earthYrsPassed = earthYearsSince(currentAge, pastAge);
    return parseFloat((earthYrsPassed / 0.24).toFixed(2));

}

export function venusYearsSince(currentAge, pastAge) {

}

export function marsYearsSince(currentAge, pastAge) {

}

export function jupiterYearsSince(currentAge, pastAge) {

}