var questions = [{
    "question": "Who was the first person in space?",
    "a1": "spud the dog",
    "a2": "Buzz Aldrin",
    "a3": "Elvis",
    "a4": "Yuri Gagarin",
    "asnswer": "4"
}, {
    "question": "Who invented the internet?",
    "a1": "Al Gore",
    "a2": "Buzz Lightyear",
    "a3": "Robert Kahn & Vinton Cerf",
    "a4": "The US Government",
    "asnswer": "3"
}, {
    "question": "How do you make green using two primary colors?",
    "a1": "Mix blue & yellow",
    "a2": "Mix red & blue",
    "a3": "Mix red & yellow",
    "a4": "You cannot make green using primary colors",
    "asnswer": "1"
}, {
    "question": "What is the answer to Life, the Universe, and Everything?",
    "a1": "Nothing",
    "a2": "42",
    "a3": "Music",
    "a4": "Prevent Global Warming",
    "asnswer": "2"
}, {
    "question": "The average American does what at least 22 times a day?",
    "a1": "Sneeze",
    "a2": "Pick their nose",
    "a3": "Open the fridge",
    "a4": "Phone a friend",
    "asnswer": "3"
}];

var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;

var container = $('#mainContainer')
var results = $('#results');

$(document).ready(function() {

function loadQuestion(questionIndex){
    var index = questions[questionIndex];
    console.log(questions);
    questionEle = ((questionIndex + 1) + '. ' + index.question);
    console.log(questionEle);
    $('#question').text(questionEle);
    $('#a1').text(index.a1);
    $('#a2').text(index.a2);
    $('#a3').text(index.a3);
    $('#a4').text(index.a4);
}

function loadNextQuestion(){
    var selectedOption = $(this.on('Click'));
    console.log($(this));
    var answer = selectedOption.value;
    if (questions[currentQuestion].answer == answer){
        score += 10;
        results.html('<h3>' + score + '</h3>');
        currentQuestion++;
    }
    
    if (currentQuestion == totalQuestions){
        container.style.display = 'none'
        results.style.display = '';
        results.text('Your Score ' + score)
        return;
    }
    loadQuestion(currentQuestion);
}

    var countdown = function (){
        $('#timer').each(function() {
            var count = parseInt($(this).html());
            if (count !== 0) {
                $(this).html(count - 1);
            }
        });
    };
    setInterval(countdown, 1000);



loadQuestion(currentQuestion);

});

