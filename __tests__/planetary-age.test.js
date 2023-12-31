import { mercuryAge, venusAge, marsAge, jupiterAge } from '../src/js/planetary-age.js';
import EarthHuman from '../src/js/earth-age.js';

describe('planetAge', () => {

    test('should calculate age on Mercury based on EarthHuman earthAge', () => {
        const earthlingAge = new EarthHuman("Zim", 2001);
        const mercuryAgeResult = mercuryAge(earthlingAge.getEarthAge());
        expect(mercuryAgeResult).toEqual(95.83);
    })

    test('should calculate age on Venus based on EarthHuman earthAge', () => {
        const earthlingAge = new EarthHuman("Zim", 2001);
        const venusAgeResult = venusAge(earthlingAge.getEarthAge());
        expect(venusAgeResult).toEqual(37.10);
    })

    test('should calculate age on Mars based on EarthHuman earthAge', () => {
        const earthlingAge = new EarthHuman("Zim", 2001);
        const marsAgeResult = marsAge(earthlingAge.getEarthAge());
        expect(marsAgeResult).toEqual(12.23);
    })

    test('should calculate age on Jupiter based on EarthHuman earthAge', () => {
        const earthlingAge = new EarthHuman("Zim", 2001);
        const jupiterAgeResult = jupiterAge(earthlingAge.getEarthAge());
        expect(jupiterAgeResult).toEqual(1.94);
    })

})
