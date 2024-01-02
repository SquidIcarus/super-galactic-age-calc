import { earthYearsSince, mercuryYearsSince } from '../src/js/years-since.js';

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

    test('should calculate the years passed on Mercury based on chosedn past age', () => {
        const result = mercuryYearsSince(currentAge, pastAge);
        expect(result).toEqual(8.33)
    });

})
