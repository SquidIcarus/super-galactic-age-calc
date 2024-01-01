import { earthYearsPassed } from '../src/js/years-passed';

describe('earthYearsPassed', () => {

    test('should calculate how many years have passed since given birthday age', () => {
        const currentAge = 22;
        const birthdayAge = 21;
        expect(earthYearsPassed(currentAge, birthdayAge)).toEqual(1);
    })
})