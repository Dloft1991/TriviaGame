var game = document.querySelector('main');

window.onload = function () {
    document.getElementById('quiz').style.visibility = 'hidden';
    document.getElementById('submitbtn').style.visibility = 'hidden';
    document.getElementById('resetbtn').style.visibility = 'hidden';
};

function start() {
    document.getElementById("quiz").style.visibility = "visible";
    document.getElementById('submitbtn').style.visibility = 'visible';
    document.getElementById('resetbtn').style.visibility = 'visible';
}

function restart() {
    document.getElementById("quiz").style.visibility = "hidden";
    // document.getElementById("number_correct").style.visibility = "hidden";
    
}

function check() {
console.log("working");
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

    document.getElementById("quiz").style.visibility = "hidden";
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    
    document.getElementById("after_submit").style.visibility = "visible";
}

// timer// 

var number = 21;

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
       
      }
    }

    function stop() {

      clearInterval(intervalId);
    }

    

   
  