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

  yearsLeft(gender, yourAge) {

    let timeRemaining = "";
    const maleAveLE = 76.30;
    const femaleAveLE = 81.30;


      if(gender === "male" && yourAge <= maleAveLE) {
        timeRemaining = maleAveLE - yourAge;
      } else if (gender === "female" && yourAge <=femaleAveLE) {
        timeRemaining = femaleAveLE - yourAge;
      } else if(gender === "male" && yourAge > maleAveLE) {
        timeRemaining = `Congratulations, you have surpassed a male's average life expectancy of ${maleAveLE} years in the United States.`;
      } else if(gender =="female" && yourAge > femaleAveLE) {
        timeRemaining = `Congratulations, you have surpassed a female's average life expectancy of ${femaleAveLE} years in the United States.`;
      }
    //   timeRemaining = Math.round((maleAveLE - earthAge));
    //   console.log("DEGUG:" + timeRemaining);
    //
    // }else if((earthAge > maleAveLE) && (gender === male)) {
    //
    //
    // }else if((earthAge <= femaleAveLE) && (gender === female)) {
    //         timeRemaining = Math.round((femaleAveLE - earthAge));
    //
    // }else if((earthAge > femaleAveLE) && (gender === female)) {
    //
    // }

    return timeRemaining;
    // }
  }

};
