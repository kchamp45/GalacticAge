import { GalacticAge } from './../js/galacticAge.js';


$(document).ready(function() {
  $('#findAge-form').submit(function(event) {
    event.preventDefault();
    let todayDate = ($('#today').val();
    let birthdate = ($('#date').val();
    let person = new GalacticAge();
    let yourAge = person.getAge(todayDate, birthdate);

    $('#findAge-form').hide();

    $('#age').text(yourAge);

  });
});
