const readlineSync = require('readline-sync');
const chalk = require('chalk');

class Question {
  static score = 0;
  constructor(question, optionA, optionB, optionC, optionD, correctOptionIndex) {
    this.question = question;
    this.optionsArray = [optionA, optionB, optionC, optionD];
    this.correctOptionIndex = correctOptionIndex;
  }
  printQuestion() {
    console.log(`${this.question}`);
  }
  printOptions() {
    this.optionsArray.forEach((optionName, index) => {
      console.log(`\t${index + 1}) ${optionName}`);
    }
    )
  }
  checkUserInput(userAnsIndex) {
    if ((userAnsIndex - 1) == this.correctOptionIndex) {
      console.log(chalk.green("Congratulations, you got it right"));
      return true;
    } else {
      console.log(chalk.red(`OOPS! you got it wrong, correct option is ${this.optionsArray[this.correctOptionIndex]}`));
      return false;
    }
  }
}
const welcomeFunction = () => {
  console.log(chalk.yellowBright("Welcome to the Capital's quiz"));
  console.log(chalk.bgBlueBright("Before you start, you should know that"));
  console.log("\t This quiz contains 5 questions.");
  console.log("\t Each question will have four options.");
  console.log("\t Input the option number that you think is correct.");
  console.log("\t Each correct answer will reward you 1 point.");
  const userReady = (readlineSync.question('Ready to start ?(y/n) : '))
  if (userReady === "y" || "yes" || "Y" || "YES" || "Yes") {
    startGame();
  } else {
    console.log("No issues");
  }
}

const startGame = () => {
  questionsArray.forEach(questionObj => {
    questionObj.printQuestion();
    questionObj.printOptions();
    let userAnswer = (readlineSync.question("Enter correct option number : "));
    if (questionObj.checkUserInput(userAnswer)) {
      Question.score += 1;
      console.log("score updated!");
    }
  })
}

const endGame = () => {
  console.log("GAME OVER");
  console.log(`Your final score is ${Question.score}/5`);
  console.log("Thanks for playing!");
}

questionsArray = [];
question1 = new Question("What is the capital of ARUNACHAL PRADESH", "Itanagar", "Guwahati", "Kohima", "Imphal", 0);
questionsArray.push(question1);
question2 = new Question("What is the capital of UTTARAKHAND", "Dehradun", "Haridwar", "Nanital", "Roorkee", 0);
questionsArray.push(question2);
question3 = new Question("What is the capital of ASSAM", "Itanagar", "Guwahati", "Kohima", "Imphal", 1);
questionsArray.push(question3);
question4 = new Question("What is the capital of ORISSA", "Jamshedpur", "Puri", "Bhubaneswar", "Raipur", 2);
questionsArray.push(question4);
question5 = new Question("What is the capital of MANIPUR", "Itanagar", "Guwahati", "Kohima", "Imphal", 3);
questionsArray.push(question5);

console.log("-------------------------------------------------------------------------------");
welcomeFunction();
console.log("-------------------------------------------------------------------------------");
endGame();
