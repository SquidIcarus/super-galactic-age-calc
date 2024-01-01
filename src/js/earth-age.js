export default class EarthHuman {
    constructor(humanName, earthlingBirthYear) {
        this.humanName = humanName;
        this.earthlingBirthYear = earthlingBirthYear;
        this.earthAge = this.getEarthAge();
    }

    getEarthAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.earthlingBirthYear;
    }

    yearsPassed() {
        const earthYearsPassed = this.earthAge - pastBirthdayAge;

        return {
            earth: earthYearsPassed,
            mercury: this.convertToPlanetaryAge(earthYearsPassed, 0.24),
            venus: this.convertToPlanetaryAge(earthYearsPassed, 0.62),
            mars: this.convertToPlanetaryAge(earthYearsPassed, 1.88),
            jupiter: this.convertToPlanetaryAge(earthYearsPassed, 11.86)
        }
    }

};
