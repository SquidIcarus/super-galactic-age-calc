import EarthHuman from '../src/js/planet-age.js';

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
});


