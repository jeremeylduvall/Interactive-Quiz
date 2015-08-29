var totalCorrect = 0;
var currentQuestion = 0;
var totalQuestions = quiz.questions.length;
var guess0 = document.getElementById("guess0");
var guess1 = document.getElementById("guess1");

// Track progress through quiz
var progress = function () {
  var progress = document.getElementById("progress");
  progress.innerHTML = "Question " + (currentQuestion+1) + " of " + totalQuestions;
}

// Set question and choices 
var setQuestion = function (currentQuestion) {
  question.innerHTML = quiz.questions[currentQuestion].question;
  choice0.innerHTML = quiz.questions[currentQuestion].choice0;
  choice1.innerHTML = quiz.questions[currentQuestion].choice1;
}

// Increment totalCorrect when answer is correct
var addOne = function() {
  totalCorrect = totalCorrect + 1;
}

// Replace quiz with results when finished
var finish = function () {
  var quizElement = document.getElementById('quiz');
  quizElement.innerHTML = '<h1>Game Over</h1';
  quizElement.innerHTML += '<h2>You got ' + totalCorrect + ' questions correct.</h2>';  
}

// Check to see if this is the last question
var checkDone = function (currentQuestion) {
  if (currentQuestion == totalQuestions) {
    finish();
  } else {
    setQuestion(currentQuestion);
    progress();
  }
}

// Track results on clicking the first choice
guess0.onclick = function () {
  if (quiz.questions[currentQuestion].correct == choice0.innerHTML) {  
    currentQuestion = currentQuestion + 1;
    addOne();
    checkDone(currentQuestion);
  } else {
    currentQuestion = currentQuestion + 1;
    checkDone(currentQuestion);
  }
}

// Track results on clicking the second choice
guess1.onclick = function () {
  if (quiz.questions[currentQuestion].correct == choice1.innerHTML) {  
    currentQuestion = currentQuestion + 1;
    addOne();
    checkDone(currentQuestion);
  } else {
    currentQuestion = currentQuestion + 1;
    checkDone(currentQuestion);
  }
}

// Set initial progress 0 of total questions
progress();