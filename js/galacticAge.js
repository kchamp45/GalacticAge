export class GalacticAge {

  constructor(name){
    this.name = name;
  }

  toSec(earthAge) {
    let earthAgeSec = Math.round((earthAge * 365 * 24 * 60 * 60));
    return earthAgeSec;
  }

  getAge(today, birthdate) {
    let dateA = moment(today);
    let dateB = moment(birthdate);
    let output = dateA.diff(dateB, 'seconds');
    return output;
  }

  getMercuryAge(earthAge) {
    let mercuryAge = Math.round((.24 * earthAge));
    return mercuryAge;
  }

  getVenusAge(earthAge) {
    let venusAge = Math.round((.62 * earthAge));
    return venusAge;
  }

  getMarsAge(earthAge) {
    let marsAge = Math.round((1.88 * earthAge));
    return marsAge;
  }

  getJupiterAge(earthAge) {
    let jupiterAge = Math.round((11.86 * earthAge));
    return jupiterAge;

  }

  yearsLeft(planet, yourAge) {

    let timeRemaining = "";
    const aveLifeExpectancy = 78.8;
    let lifeExpOnMercury = this.getMercuryAge(aveLifeExpectancy);
    let lifeExpOnVenus = this.getVenusAge(aveLifeExpectancy);
    let lifeExpOnMars = this.getMarsAge(aveLifeExpectancy);
    let lifeExpOnJupiter = this.getJupiterAge(aveLifeExpectancy);

    if (planet === "mercury" && yourAge <= lifeExpOnMercury) {
      timeRemaining = lifeExpOnMercury - this.getMercuryAge(yourAge);
    }else if(planet === "venus" && yourAge <= lifeExpOnVenus){
      timeRemaining = lifeExpOnVenus - this.getVenusAge(yourAge);
    }else if(planet === "mars" && yourAge <= lifeExpOnMars){
      timeRemaining = this.getMarsAge(aveLifeExpectancy) - this.getMarsAge(yourAge);
    }else if(planet === "jupiter" && yourAge <= lifeExpOnJupiter){
      timeRemaining = this.getJupiterAge(aveLifeExpectancy) - this.getJupiterAge(yourAge);
    }else if((planet === "mercury" && yourAge > lifeExpOnMercury) || (planet === "venus" && yourAge > lifeExpOnVenus) || (planet === "mars" && yourAge > lifeExpOnMars) || (planet === "jupiter" && yourAge > lifeExpOnJupiter) {
      timeRemaining = `Congratulations, you have surpassed your life expectancy. Live long and prosper!`;
    }
    return timeRemaining;
  }

};
    // let timeRemaining = "";
    // const maleAveLE = 76.30;
    // const femaleAveLE = 81.30;
    //
    // if(gender === "male" && yourAge <= maleAveLE) {
    //   timeRemaining = maleAveLE - yourAge;
    // } else if (gender === "female" && yourAge <=femaleAveLE) {
    //   timeRemaining = femaleAveLE - yourAge;
    // } else if((gender === "male" && yourAge > maleAveLE) || (gender ==="female" && yourAge > femaleAveLE)) {
    //   timeRemaining = `As of 2017, in the United States, the life expectancy for males is ${maleAveLE} years and for females is ${femaleAveLE} years.
    //   Congratulations, you have surpassed your life expectancy. Live long and prosper!`;
    // }
