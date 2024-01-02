export function earthYearsSince(currentAge, pastAge) {
    return currentAge - pastAge;
}

export function mercuryYearsSince(currentAge, pastAge) {
    const earthYrsPassed = earthYearsSince(currentAge, pastAge);
    return parseFloat((earthYrsPassed / 0.24).toFixed(2));

}