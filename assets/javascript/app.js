var game = document.querySelector('main');


var score = 0;
var answer = [];
var correct = 0;
var wrong = 0;

//questions
var question = ["What color is Thanos?", "Who is Starloards favorite actor?", "Where is SpiderMan from?", "How many kids does HawkEye have?"];
// var question = [
//     {
//         one: {
//         ask: "What color is Thanos?",
//         option: ["pink", "blue", "red", "purple"],
//         right: "purple",
//         }
//     },
//     {
//         two: {
//         ask: "Who is Starloards favorite actor?",
//         option: ["Brian Cranston", "Samuel L. Jackson", "Kevin Bacon", "Tom Cruse"],
//         right: "Kevin Bacon",
//         }
//     },
//     {
//         three: {
//         ask: "Where is SpiderMan from?",
//         option: ["Orlando", "Queens", "Brooklyn", "Portland"],
//         right: "Queens",
//         }
//     },
//     {
//         four: {
//         ask: "How many kids does HawkEye have?",
//         option: ["Nine", "Three", "Two", "Five"],
//         right: "Two",
//         }
//     },
// ];

console.log(question);
console.log(question.length);
console.log(question[0]);

// var start = $("#start").on('click', function() {
//     score = 0;
//     wrong = 0;
//     correct = 0;
//     answer = [];
// });
// var ask = question[Math.floor(Math.random() * question.length)];

for(i = 0; i < question.length; i++) {
    ask = document.getElementById("showQuestion " + question[i]);
    $("#showQuestion").text(question[i]);

    
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

