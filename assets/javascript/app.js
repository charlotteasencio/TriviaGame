

$(document).ready(function () {

    //start button is shown
    $(document).ready(function() {
        $("#questions").hide();
        $("#results").hide();
        $("#submitButtonDiv").hide();
        $("#timer").hide();
    });

    //start game
    $("#start").click(function() {
      $(this).hide();
      $("#questions").show();
      $("#submitButtonDiv").show();
      $("#timer").show();
      setTimeout(function(){
          results();
      }, 1000 * 60);
var count=60;
var counter=setInterval(timer, 1000);
      function timer(){
        count=count-1;
        if (count === 0){
        clearInterval(counter);
        return;
        }
    $("#timer").html("Time remaining: " + count + " seconds");
    }
      });
    
    //answers chosen

    $("#submitbutton").click(function(){
        results();
    });
    
    //timer runs out or submit button clicked - results screen is shown 
    function results(){
        var score = 0;
        var missed = 0;  

        // Need to figure out a better way to write this if time
        var answer1 = $('input[name=q1]:checked').val(); 
        var answer2 = $('input[name=q2]:checked').val(); 
        var answer3 = $('input[name=q3]:checked').val(); 
        var answer4 = $('input[name=q4]:checked').val(); 
        var answer5 = $('input[name=q5]:checked').val(); 
    

        if (answer1 === "Ducky Tie") {
            score++;
        } else {
            missed++;
        }
        if (answer2 === "Wrestler"){
            score++;
        } else {
            missed++;
        }
        if (answer3 === "Road Kill Rage"){
            score++;
        } else {
            missed++;
        }
        if (answer4 === "Scooter"){
            score++;
        } else {
            missed++;
        }
        if (answer5 === "Puzzles"){
            score++;
        } else {
            missed++;
        }
        
        if (score >= 4){
        $("#score").html("Correct: " + score); 
        $("#scoreMessage").html("Legen-wait for it..DARY!");
        $("#missed").html("Incorrect: " + missed);
    } else if (score === 3) {
        $("#score").html("Correct: " + score);
        $("#scoreMessage").html("Not bad.");
        $("#missed").html("Incorrect: " + missed);
    } else {
        $("#score").html("Correct: " + score);
        $("#scoreMessage").html("You just got slapped.");
        $("#missed").html("Incorrect: " + missed);
    }
        $("#results").show();
        $("#questions").hide();
        $("#submitButtonDiv").hide();
        $("#timer").hide();
    }
    });

    