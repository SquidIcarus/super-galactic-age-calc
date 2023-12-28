export function mercuryAge(earthAge) {
    return parseFloat((earthAge / 0.24).toFixed(2));
}

export function venusAge(earthAge) {
    return parseFloat((earthAge / 0.62).toFixed(2))
}