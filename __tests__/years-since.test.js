import { yearsSince } from '../src/js/years-since.js';

describe('yearsSince', () => {
    test('should calculate the years passed on earth', () => {
        const currentAge = 23;
        const pastAge = 21;
        const result = yearsSince(currentAge, pastAge);
        expect(result).toEqual(2);

    })
})