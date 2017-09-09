$(document).ready(function() {
  $('#life-form').submit(function(event) {
    event.preventDefault();
    let planet = $('#planet').val().toLowerCase();
    let yourAge = $('#yourAge').val();
    let person = new GalacticAge();
    let remainingYears = person.yearsLeft(planet, yourAge);

    $('#life-form').hide();

    $('#timeLeft').text(remainingYears);
    $('#lifeExpectancy').show();
  });
});
