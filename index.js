var readLineSync = require("readline-sync");
var chalk = require("chalk");
var userName = readLineSync.question(chalk.magenta.italic("What is your name? "));
console.log("Welcome " + userName + " do you know sushma?");
var score = 0;
var counts = 0;
var highest = 0;
//questions to be asked
var questions = [{
    question: "What is sushma's favorite color? ",
    answer: "White",
}, {
    question: "What is sushma's age? ",
    answer: "23"
}, {
    question: "Whether sushma likes coffee? yes/no ",
    answer: "yes"
}, {
    question: "Does sushma knows to sing? yes/no ",
    answer: "yes"
}, {
    question: "Does sushma like to go for a walk or jog? ",
    answer: "jog",
}]

function quiz(question, answer) {
    var userAnswer = readLineSync.question(chalk.blue.italic(question));
    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        score = score + 1;
        console.log(chalk.yellow.italic("correct, your score is " + score));
    }
    else {
        console.log(chalk.red.italic("wrong"));
    }
    console.log("---------------------------------");
}

//var arr_of_questions = [question1, question2, question3, question4,question5];
for (var i = 0; i < questions.length; i++) {
    quiz(questions[i].question, questions[i].answer);
}

console.log(chalk.green.italic("Hey, " + userName + " your total score is: " + score));


/*
//as the program restarts the values get reset so the below code is commented
var user_history = {
  name : userName,
  score: score,
}

//when present score is greater than previous scores by other users
if(score > user_history.score){
  user_history.name = userName;
  user_history.score = score;
  console.log("And your score of "+score+ " stands to be the highest so far");
}
else{
  console.log("Highest score is by "+user_history.name+" and the score is "+score);
}
*/
var high_scores = [{
    name: "sushma",
    score: "3",
}, {
    name: "sush",
    score: "5",
}]
//first compare between the existing high scores
console.log(chalk.blue.italic("The top two highest scores so far:"));
for (var i = 0; i < high_scores.length; i++) {
    console.log(high_scores[i].name + " : " + high_scores[i].score);
}
//checks whether the present score is higher than the existing two scores. 
var highest = high_scores.sort((c1, c2) =>
    (c1.score < c2.score) ? 1 :
        (c1.score > c2.score) ? -1 : 0
);
for (var i = 0; i < high_scores.length; i++) {
    if (i === 0 || i === 1) {
        if (highest[i].score < score) {
            counts = counts + 1;
            //counts=1
        }
        else {
            counts = 0;
        }
    }
}
if (counts === 1 || counts === 2) {
    console.log(chalk.green.italic("\nYou have scored the highest, send me the screenshot with that score! I will update the top score list"));
}
if (counts === 0) {
    console.log(chalk.red.italic("\nYou haven't scored the highest..! All the best for your next turn"));
}

console.log(chalk.magenta.italic("\n$$$$$$$$$$$$$$$$$$$$$ Feedback time $$$$$$$$$$$$$$$$$$$$$"));
if (readLineSync.keyInYN(chalk.italic('\nDo you Like to share your feedback?'))) {
    console.log(chalk.italic("\nLet us know your feedback on this Quiz challenge CLI!"))
    var selection = ['Excellent', 'Best', 'Good', 'Bad'];
    var index = readLineSync.keyInSelect(selection, chalk.magenta.italic('Select the options below?'));
    if (index > -1) {
        console.log(chalk.italic("\nThanks for your feedback!"));
    }
}
else {
    console.log("Thank you!");
}

