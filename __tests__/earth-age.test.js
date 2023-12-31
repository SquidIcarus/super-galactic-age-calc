import EarthHuman from '../src/js/earth-age.js';

describe('EarthHuman', () => {

    test('should instantiate the human with name and birth year', () => {
        const earthling = new EarthHuman("Zim", 2001, 22);
        expect(earthling.humanName).toBe("Zim");
        expect(earthling.earthlingBirthYear).toEqual(2001);
        expect(earthling.earthAge).toEqual(22);
    })

    describe('getEarthAge', () => {

        test('should calculate earth age based on earthlingBirthYear', () => {
            const currentYear = new Date().getFullYear();
            const expectedAge = currentYear - 2001;
            const earthling = new EarthHuman("Zim", 2001);
            const earthAge = earthling.getEarthAge();
            expect(earthAge).toEqual(expectedAge);
        })
    })

    describe('yearsPassed', () => {

        test('should calculate how many years have passed since a past birth year', () => {
            const human = new EarthHuman("Zim", 2001, 22);
            const results = human.yearsPassed(18);
            const expectedEarthYears = 4;
            const expectedMercuryYears = parseFloat((expectedEarthYears / 0.24).toFixed(2));
        })
    })
});


