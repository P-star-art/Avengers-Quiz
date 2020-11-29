var readlineSync = require('readline-sync');
const chalk = require('chalk');

var userName = readlineSync.question(chalk.magenta("What's your name? "));

console.log("Welcome " + chalk.yellow(userName));
let score = 0;

var questions = [
  {
  question: chalk.blue("Winter Soldier Has A Vibranium Arm "),
  answer: "true"
  },
  {
  question:chalk.blue("Captain America Is From Brooklyn "),
  answer: "true"
  },
  {
    question: chalk.blue("Ned Knows Spider-Man’s Identity "),
  answer: "true"
  },
  {
    question: chalk.blue("Nick Fury Worked With S.H.I.E.L.D. "),
  answer: "true"
  },
  {
    question: chalk.blue("Shuri Is The Black Panther "),
  answer: "false"
  },
  {
    question: chalk.blue("Black Widow’s Real Name Is Diana Prince "),
  answer: "false"
  },
  {
    question: chalk.blue("Winter Soldier’s Real Name Is Bucky Barnes "),
  answer: "true"
  },
  {
    question: chalk.blue("Goose The Cat Is Why Nick Fury Wears An Eye Patch "),
  answer: "true"
  },
  {
    question: chalk.blue("Thor Has A Sister Named Hela "),
  answer: "true"
  },
  {
    question: chalk.blue("Captain America And Bucky Barnes Are Brothers "),
  answer: "false"
  },
]

if (readlineSync.keyInYN("Do you want to play Marvel's Fan Quiz?"))
{ 
  console.log(chalk.cyan("Nice! GoodLuck to you!!!." + "Attempt this quiz just by writing either 'true' or 'false' "));
  function play(question, answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() == answer.toUpperCase())
  {
    console.log(chalk.green("Right!"));
    score += 1;
    console.log("Score: " + score);
  }
  else
  {
    console.log(chalk.red("Wrong!"));
    console.log("Score: " + score);
  }
  console.log("----------");
 }
 for(var i = 0;i<questions.length;i++)
 {
   var userQuestion = questions[i];
   play(userQuestion.question, userQuestion.answer);
 }
}

else
{
   console.log("No worries! Have a Nice Day :)");
}

console.log("YAY! You scored: " + score);