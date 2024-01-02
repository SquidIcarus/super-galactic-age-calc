import { birthdayAge } from '../src/js/years-passed';

describe('birthdayAge', () => {

    test('should calculate how many years have passed on Earth since given birthday age', () => {
        const currentEarthAge = 22;
        const yearsPassed = birthdayAge(currentEarthAge, 21);
        expect(yearsPassed).toEqual(1);
    })
})