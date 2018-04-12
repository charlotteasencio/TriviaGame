
$(document).ready(function () {

//start button is shown
$(document).ready(function() {
    $("#questions").hide();
    $("#results").hide();
});

//start game
$("#start").click(function() {
  $(this).hide();
  $("#questions").show();
  setTimeout(function(){
  }, 1000 * 80);
  });

//answers chosen

$("#submitbutton").click(function(){
    results();
});

//timer runs out or submit button clicked - results screen is shown **why are results not showing?**
function results(){
    $("results").show();
    $("#questions").hide();
}
});