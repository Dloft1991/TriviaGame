var game = document.querySelector('main');


var score = 0;
var wrong = "wrong";
var correct = "correct";

const questions = [
    {
        prompt: "what color are oranges?\n(a) orange\n\ (b) green\n(c) yellow",
    answer: "a"
 },
 {
     prompt: "what color are Bananas?\n(a) brown\n\ (b) purple\n(c) yellow",
     anser: "c"

 },
 {
     prompt: "What color is is the sky?\n(a) pink\n\
     (b) blue\n(c) green",
     answer: "b"
 }
];



for(var i=0; i < questions.length; i++) {

    var response = document.getElementById("showQuestion " + questions[i].prompt);
    
    var userAnswer = document.getElementById("userAnswer");

    if(response === questions[i].answer){
        score++;
       

    }else {
       
    }
}

// alert("You got " + score + "/" + questions.length);


////// end the test game


function ask(){
    var show = document.getElementById("showQuestion")
    
}


// timer// 

var number = 10;

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

// Questions

function choose() {

}