$(document).ready(function() {
  $('#life-form').submit(function(event) {
    event.preventDefault();
    let gender = $('#gender').val();
    let yourAge = $('#yourAge').val();
    let person = new GalacticAge();
    let remainingYears = person.yearsLeft(gender, yourAge);

    $('#life-form').hide();

    $('#timeLeft').text(remainingYears);
    $('#lifeExpectancy').show();
  });
});
