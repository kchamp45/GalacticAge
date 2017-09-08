


$(document).ready(function() {
  $('#AgeInSecs-form').submit(function(event) {
    event.preventDefault();
    let age = $('#currentAge').val();
    let person = new GalacticAge();
    let ageInSeconds = person.toSec(age);

    $('#AgeInSecs-form').hide();

    $('#seconds').text(ageInSeconds);

  });
});
