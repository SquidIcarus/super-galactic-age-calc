import EarthHuman from '..src/js/planet-age.js';

describe('EarthHuman', () => {

    test('should instantiate the human with name and birth year', () => {
        const earthling = new EarthHuman("Zim", 1985);
        expect(earthling.humanName).toBe("Zim");
        expect(earthling.earthlingBirthYear).toEqual(1985);
    })
})
