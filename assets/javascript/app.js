var game = document.querySelector('main');




function pageLoad() {
    document.getElementById("after_start").style.visibility = "visible";
    
}

function check() {

  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var correct = 0;

  if (question1 == "Purple") {
    correct++;
  }
  if (question2 == "Kevin Bacon") {
    correct++;
  }
  if (question3 == "Queens") {
    correct++;
  }
  if (question4 == "Two") {
    correct++;
  }

  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
  function restart() {
      
    pageLoad();
    check();
    
  }
}


// timer// 

var number = 11;

    var intervalId;

    $("#stop").on("click", stop);

    $("#resume").on("click", run);


    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      number--;

      $("#counter").html("<h2>" + number + "</h2>");

      if (number === 0) {
        
        stop();

        // alert("Time Up!");   
      }
    }

    function stop() {

      clearInterval(intervalId);
    }

    run();

   
  