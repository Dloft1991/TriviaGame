var game = document.querySelector('main');


var score = 0;
var answer = [];
var correct = 0;
var wrong = 0;

//questions
var question = [
    {
        ask: "What color is Thanos?",
        option: ["pink", "blue", "red", "purple"],
        right: "purple",
    },
    {
        ask: "Who is Starloards favorite actor?",
        option: ["Brian Cranston", "Samuel L. Jackson", "Kevin Bacon", "Tom Cruse"],
        right: "Kevin Bacon",
    },
    {
        ask: "Where is SpiderMan from?",
        option: ["Orlando", "Queens", "Brooklyn", "Portland"],
        right: "Queens",
    },
    {
        ask: "How many kids does HawkEye have?",
        option: ["Nine", "Three", "Two", "Five"],
        right: "Two",
    },
];

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