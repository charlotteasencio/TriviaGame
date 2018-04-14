

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
    
    //timer runs out or submit button clicked - results screen is shown **why are results not showing?**
    function results(){
        var score = 0;
          

        //figure out better way to write this if time
        var answer1 = $('input[name=q1]:checked').val(); 
        $("#results").append("<div> Your response: " + answer1 + " " + "Correct Response: Guatemala City </div>");
        var answer2 = $('input[name=q2]:checked').val(); 
        $("#results").append("<div> Your response: " + answer2 + " " + "Correct Response: September 15th </div>");
        var answer3 = $('input[name=q3]:checked').val(); 
        $("#results").append("<div> Your response: " + answer3 + " " + "Correct Response: Blue and White</div>");
        var answer4 = $('input[name=q4]:checked').val(); 
        $("#results").append("<div> Your response: " + answer4 + " " + "Correct Response: Bird</div>");
        var answer5 = $('input[name=q5]:checked').val(); 
        $("#results").append("<div> Your response: " + answer5 + " " + "Correct Response: Star Wars: Episode IV </div>");

        if (answer1 === "Guatemala City") {
            score++;
        }
        if (answer2 === "September 15th"){
            score++;
        } 
        if (answer3 === "Blue and White"){
            score++;
        } 
        if (answer4 === "Bird"){
            score++;
        } 
        if (answer5 === "Star Wars: Episode IV"){
            score++;
        }
        
        $("#score").html("Your score: " + score + " " + "of 5");  
        $("#results").show();
        $("#questions").hide();
        $("#submitButtonDiv").hide();
        $("#timer").hide();
    }
    });

    