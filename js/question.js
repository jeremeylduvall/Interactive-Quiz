// Create question element with question, choices, and correct answer
function Question(question, choice0, choice1, correct) {
  this.question = question;
  this.choice0 = choice0;
  this.choice1 = choice1;
  this.correct = correct;
}

// Define some initial questions
var president = new Question("Who was the first President of the US?", "George Washington", "Abraham Lincoln", "George Washington");
var cat = new Question("Who is the best cat in the world?", "Garfield", "Denali", "Denali");
var game = new Question("What is the better game?", "Soccer", "Basketball", "Soccer");

// Turn choices into an array
// Check isCorrectAnswer