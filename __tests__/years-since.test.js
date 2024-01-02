import { earthYearsSince, mercuryYearsSince, venusYearsSince, marsYearsSince, jupiterYearsSince } from '../src/js/years-since.js';

describe('yearsSince', () => {
    let currentAge, pastAge;

    beforeEach(() => {
        currentAge = 23;
        pastAge = 21;
    });

    test('should calculate years passed on Earth based on chosen past age', () => {
        const result = earthYearsSince(currentAge, pastAge);
        expect(result).toEqual(2)
    });

    test('should calculate the years passed on Mercury based on chosen past age', () => {
        const result = mercuryYearsSince(currentAge, pastAge);
        expect(result).toEqual(8.33)
    });

    test('should calculate the years passed on Venus based on chosen past age', () => {
        const result = venusYearsSince(currentAge, pastAge);
        expect(result).toEqual(3.23)
    });

    test('should calculate the years passed on Mars based on chosen past age', () => {
        const result = marsYearsSince(currentAge, pastAge);
        expect(result).toEqual(1.06)
    });

    test('should calculate the years passed on Jupiter based on chosen past age', () => {
        const result = jupiterYearsSince(currentAge, pastAge);
        expect(result).toEqual(0.17)
    });
});
