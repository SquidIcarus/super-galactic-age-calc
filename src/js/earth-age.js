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
};

