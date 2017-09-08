import { GalacticAge } from './../js/galacticAge.js';


$(document).ready(function() {
  $('#life-form').submit(function(event) {
    event.preventDefault();
    let gender = $('#gender').val());
    let earthAge = parseInt($('#earthAge').val());
    let person = new GalacticAge();
    let remainingYears = person.yearsLeft(gender, earthAge);

    $('#life-form').hide();

    $('#male').text(remainingYears);
    $('#female').text(remainingYears);
  });
});
