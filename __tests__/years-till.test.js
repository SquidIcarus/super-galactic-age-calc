import { earthYearsTill, mercuryYearsTill, venusYearsTill, marsYearsTill, jupiterYearsTill } from '../src/js/years-till.js';

describe('yearsTill', () => {
    let futureAge, currentAge;

    beforeEach(() => {
        futureAge = 50;
        currentAge = 23;

    });

    test('should calculate years till next birth year on Earth based on chosen futureAge', () => {
        const result = earthYearsTill(futureAge, currentAge);
        expect(result).toEqual(27);
    });

    test('should calculate years till next birth year on Mercury based on chosen futureAge', () => {
        const result = mercuryYearsTill(futureAge, currentAge);
        expect(result).toEqual(112.5);
    });

    test('should calculate years till next birth year on Venus based on chosen futureAge', () => {
        const result = venusYearsTill(futureAge, currentAge);
        expect(result).toEqual(43.55);
    });

    test('should calculate years till next birth year on Mars based on chosen futureAge', () => {
        const result = marsYearsTill(futureAge, currentAge);
        expect(result).toEqual(14.36);
    });

    test('should calculate years till next birth year on Jupiter based on chosen futureAge', () => {
        const result = jupiterYearsTill(futureAge, currentAge);
        expect(result).toEqual(2.28);
    });
});
