import { earthYearsTill, mercuryYearsTill, venusYearsTill, marsYearsTill, jupiterYearsTill } from '../src/js/years-till.js';

describe('yearsTill', () => {
    let currentAge, futureAge;

    beforeEach(() => {
        currentAge = 23;
        futureAge = 50;
    });

    test('should calculate years till next birth year on Earth based on chosen futureAge', () => {
        const result = earthYearsTill(currentAge, futureAge);
        expect(result).toEqual(27);
    });

    test('should calculate years till next birth year on Mercury based on chosen futureAge', () => {
        const result = mercuryYearsTill(currentAge, futureAge);
        expect(result).toEqual(112.5);
    });

    test('should calculate years till next birth year on Venus based on chosen futureAge', () => {
        const result = venusYearsTill(currentAge, futureAge);
        expect(result).toEqual(43.55);
    });

    test('should calculate years till next birth year on Mars based on chosen futureAge', () => {
        const result = marsYearsTill(currentAge, futureAge);
        expect(result).toEqual(14.36);
    });

    test('should calculate years till next birth year on Jupiter based on chosen futureAge', () => {
        const result = jupiterYearsTill(currentAge, futureAge);
        expect(result).toEqual(2.28);
    });
});
