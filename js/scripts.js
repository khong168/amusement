$(document).ready(function() {
  var height = parseInt(prompt("How tall are you in inches?"));

  if (height>=56) {
    $('#over56').show();
  } else {
    $('#under56').show();
  };
});
