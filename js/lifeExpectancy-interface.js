


$(document).ready(function() {
  $('#life').submit(function(event) {
    event.preventDefault();
    let gender = $('#gender').val();
    let earthAge = $('#earthAge').val();
    let person = new GalacticAge();
    let remainingYears = person.yearsLeft(gender, earthAge);

    $('#life').hide();

    $('#male').text(remainingYears);
    $('#female').text(remainingYears);
  });
});
