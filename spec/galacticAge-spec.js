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
    expect(newAge.toSec(5)).toEqual(157680000);
  });

  it('should find difference between two dates in seconds', function() {
    expect(newAge.getAge('2010-10-09')).not.toEqual(157680000);
  });

  it('should return human age in Mercury years'), function() {
    expect(newAge.getMercuryAge(5).toEqual(1);
  });

  it('should return human age in Venus years'), function() {
    expect(newAge.getVenusAge(5).toEqual(3);
  });

  it('should return human age in Mars years'), function() {
  expect(newAge.getMarsAge(5).toEqual(9);
  });

  it('should return human age in Jupiter years'), function() {
    expect(newAge.getJupiterAge(5).toEqual(59);
  });

  it('should return life expectancy in U.S. based on gender'), function() {
    expect(newAge.yearsLeft("male", 30).toEqual(46.3);
  });

  it('should return a congratulatory message for exceeding life expectancy', function() {
    expect(newAge.yearsLeft("male", 80).toEqual("As of 2017, in the United States, the life expectancy for males is 76.3 years and for females is 81.3 years. Congratulations, you have surpassed your life expectancy. Live long and prosper!");  
  });

});
