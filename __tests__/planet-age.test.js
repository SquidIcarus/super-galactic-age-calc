import EarthHuman from '..src/js/planet-age.js';

describe('EarthHuman', () => {

    test('should instantiate the human with name and birth year', () => {
        const human = new EarthHuman("Zim", 1985);
        expect(human.name).toBe("Zim");
        expect(human.birthYear).toEqual(1985);
    })
})
