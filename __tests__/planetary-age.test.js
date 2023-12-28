import { mercuryAge } from '../src/js/planetary-age.js';
import EarthHuman from '../src/js/earth-age.js';

describe('planetAge', () => {

    test('should calculate age on other planets based on EarthHuman earthAge', () => {
        const earthlingAge = new EarthHuman("Zim", 2001);
        const mercuryAgeResult = mercuryAge(earthlingAge.getEarthAge());
        expect(mercuryAgeResult).toEqual(91.67)
    })
})