import { GalacticAge } from './../js/galacticAge.js';


$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();
    let humanName = $('#name').val();
    let earthAge = $('#earthAge').val();
    let human = new GalacticAge(humanName);
    let mercuryAge = human.getMercuryAge(earthAge);
    let venusAge = human.getVenusAge(earthAge);
    let marsAge = human.getMarsAge(earthAge);
    let jupiterAge = human.getJupiterAge(earthAge);

    $('#age-form').hide();

    $('#mercury').text(mercuryAge);
    $('#venus').text(venusAge);
    $('#mars').text(marsAge);
    $('#jupiter').text(jupiterAge);
  });
});
