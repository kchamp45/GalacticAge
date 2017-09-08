export class GalacticAge {

  constructor(name){
    this.name = name;
  }

  toSec (earthAge) {
    let earthAgeSec = earthAge * 365 * 24 * 60 * 60;
  }
    return earthAgeSec;
  }

  getDiff(inputdate)
    let formattedDate = moment(inputdate, 'YYYY-MM-DD');
    let birthdate = moment(formattedDate);
    let output = birthdate.fromNow();
  }
    return output;
  }

  getMercuryAge(earthAge) {
    let mercuryAge = Math.round((.24 * earthAge));
  }
    return mercuryAge;
  }

  getVenusAge(earthAge) {
    let venusAge = Math.round((.62 * earthAge));
  }
    return venusAge;
  }

  getMarsAge(earthAge) {
    let marsAge = Math.round((1.88 * earthAge));
  }
    return MarsAge;
  }

  getJupiterAge(earthAge) {
    let jupiterAge = Math.round((.24 * earthAge));
  }
    return jupiterAge;
  }

  yearsLeft(gender, earthAge) {
    let timeRemaining = "";
    const maleAveLE = 76.30;
    const femaleAveLE = 81.30;
    if(earthAge < maleAveLE && gender === male) {
      timeRemaining = Math.round(maleAveLE - earthAge);
      if(earthAge > maleAveLE) {
        timeRemaining = `Congratulations, you have surpassed a male's average life expectancy of ${maleAveLE} in the United States.`
      }
      return timeRemaining;

    }else if(earthAge < femaleAveLE && gender === female) {
      timeRemaining = Math.round(femaleAveLE - earthAge);
      if(earthAge > femaleAveLE) {
        timeRemaining = `Congratulations, you have surpassed a female's average life expectancy of ${femaleAveLE} in the United States.`
      }
      return timeRemaining;
    };
  }

};
