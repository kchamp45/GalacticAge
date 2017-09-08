import { GalacticAge } from './../js/galacticAge.js';


describe('GalacticAge', function(){
  var newAge;
  beforeEach(function(){
    newAge = new GalacticAge("Kim");
  });

  it('should test whether can instantiate newAge object', function(){
    expect(newAge.name).toEqual("Kim")
  });


  it('should convert age to seconds', function(){
    expect(newAge.toSec("5")).toEqual("157680000");
  });

  it('should find difference between two dates in seconds', function() {
    expect(newAge.getDiff('2010-10-09')).toEqual("...");
  });

  it('should return human age in Mercury years'), function() {
    expect(newAge.getMercuryAge(5).toEqual("...");
  });

  it('should return human age in Venus years'), function() {
    expect(newAge.getVenusAge(5).toEqual("...");
  });

  it('should return human age in Mars years'), function() {
  expect(newAge.getMarsAge(5).toEqual("...");
  });

it('should return human age in Jupiter years'), function() {
  expect(newAge.getJupiterAge(5).toEqual("...");
});

it('should return life expectancy in U.S. based on gender'), function() {
  expect(newAge.getLifeExp("male").toEqual("...");
});

}
//   it('should test whether can replace with roman symbol at hundredth place', function(){
//     expect(roman.hunPlace("1")).toEqual("C");
//   });
//
//   it('should test whether can replace with roman symbol at tenth place', function(){
//     expect(roman.tenPlace("1")).toEqual("X");
//   });
//
//   it('should test whether can replace with roman symbol at ones place', function(){
//     expect(roman.onePlace("1")).toEqual("I");
//   });
//   it('should return null if input is out of range', function(){
//     expect(roman.toRoman("4500")).toEqual("Invalid number, try again");
//   });
//   it('should apply thouPlace, hunPlace, tenPlace, and onePlace to yield correct roman numeral', function(){
//
//   expect(roman.toRoman("2500")).toEqual("MMD");
//   });

});
