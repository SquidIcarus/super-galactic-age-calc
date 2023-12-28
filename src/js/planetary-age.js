export function mercuryAge(earthAge) {
    return parseFloat((earthAge / 0.24).toFixed(2));
}

export function venusAge(earthAge) {
    return parseFloat((earthAge / 0.62).toFixed(2));
}

export function marsAge(earthAge) {
    return parseFloat((earthAge / 1.88).toFixed(2));
}

export function jupiterAge(earthAge) {
    // return parseFloat((earthAge / 11.86).toFixed(2));
}
