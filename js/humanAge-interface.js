import { GalacticAge } from './../js/galacticAge.js';


$(document).ready(function() {
  $('#ageInSecs-form').submit(function(event) {
    event.preventDefault();
    let age = parseInt($('#currentAge').val());
    let person = new GalacticAge();
    let ageInSeconds = person.toSec(age;

    $('#ageInSecs-form').hide();

    $('#age').text(ageInSecs);

  });
});
