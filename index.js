#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const name = await inquirer.prompt([
    {
        name: "firstName",
        type: 'input',
        message: "What is Your Name:"
    }
]);
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "1. What is TypeScript?",
        choices: [" a) A JavaScript framework ",
            " b) A statically typed JavaScript superset ",
            " c) A JavaScript library",
            " d) A programming language"]
    },
    {
        name: "question_2",
        type: "list",
        message: "2. What is the any type in TypeScript??",
        choices: ["a) A type that represent any value",
            "b) A type that represent no value",
            "c) A type that represent null value",
            "d) A type that represent undefined value",
        ]
    },
    {
        name: "question_3",
        type: "list",
        message: "3. How do you declare a variable in TypeScript?",
        choices: ["a) let num = 4",
            "b) let num:number = 23",
            "c) const a = 'Ubaid'",
            "d) All of the above"]
    },
    {
        name: "question_4",
        type: "list",
        message: "4. How do you compile TypeScript code to JavaScript?",
        choices: ["a) Using the js command",
            "b) Using the tsc command",
            "c) Using the compile command",
            "d) Using the build command"]
    },
    {
        name: "question_5",
        type: "list",
        message: "5. What is the purpose of the enum keyword in TypeScript?",
        choices: ["a) To define a class",
            "b) To define a function",
            "c) To define a set of named values",
            "d) To define a variable"]
    },
    {
        name: "question_6",
        type: "list",
        message: "6. Which of the following is a valid TypeScript data type?",
        choices: [" a) number ",
            " b) string",
            " c) boolean",
            " d) All of the above"]
    },
    {
        name: "question_7",
        type: "list",
        message: "7. What is the purpose of the type keyword in TypeScript?",
        choices: ["a) To define a new class",
            "b) To define a new interface",
            "c) To define a type alias",
            "d) None of these"]
    },
    {
        name: "question_8",
        type: "list",
        message: "8. Typescript is a superset of?",
        choices: [" a) JavaScript",
            " b) Phyton ",
            " c) Java",
            " d) None of these"]
    },
    {
        name: "question_9",
        type: "list",
        message: "9. What is the purpose of the never type in TypeScript?",
        choices: [" a) To represent a value that always occurs ",
            " b) To represent a value that never occurs ",
            " c) A type that represent null value",
            " d) A type that represent undefined value",]
    },
    {
        name: "question_10",
        type: "list",
        message: "10. What is the purpose of the tsconfig.json file?",
        choices: ["a) To configure JavaScript runtime options",
            "b) To configure TypeScript compiler options",
            "c) To configure TypeScript library options",
            "d) To configure TypeScript framework options"]
    },
]);
let score = 0;
switch (quiz.question_1) {
    case " b) A statically typed JavaScript superset ":
        console.log("1.Correct Answer!");
        ++score;
        break;
    default:
        console.log("1.Incorrect Answer!");
        break;
}
switch (quiz.question_2) {
    case "a) A type that represent any value":
        console.log("2.Correct Answer!");
        ++score;
        break;
    default:
        console.log("2.Incorrect Answer!");
        break;
}
switch (quiz.question_3) {
    case "d) All of the above":
        console.log("3.Correct Answer!");
        ++score;
        break;
    default:
        console.log("3.Incorrect Answer!");
        break;
}
switch (quiz.question_4) {
    case "b) Using the tsc command":
        console.log("4.Correct Answer!");
        ++score;
        break;
    default:
        console.log("4.Incorrect Answer!");
        break;
}
switch (quiz.question_5) {
    case "c) To define a set of named values":
        console.log("5.Correct Answer!");
        ++score;
        break;
    default:
        console.log("5.Incorrect Answer!");
        break;
}
switch (quiz.question_6) {
    case " d) All of the above":
        console.log("6.Correct Answer!");
        ++score;
        break;
    default:
        console.log("6.Incorrect Answer!");
        break;
}
switch (quiz.question_7) {
    case "c) To define a type alias":
        console.log("7.Correct Answer!");
        ++score;
        break;
    default:
        console.log("7.Incorrect Answer!");
        break;
}
switch (quiz.question_8) {
    case " a) JavaScript":
        console.log("8.Correct Answer!");
        ++score;
        break;
    default:
        console.log("8.Incorrect Answer!");
        break;
}
switch (quiz.question_9) {
    case " b) To represent a value that never occurs ":
        console.log("9.Correct Answer!");
        ++score;
        break;
    default:
        console.log("9.Incorrect Answer!");
        break;
}
switch (quiz.question_10) {
    case "b) To configure TypeScript compiler options":
        console.log("10.Correct Answer!");
        ++score;
        break;
    default:
        console.log("10.Incorrect Answer!");
        break;
}
console.log(chalk.bold.yellow(`${chalk.bold.green(name.firstName)}, Your Score is ${chalk.bold.red(score)} out of ${chalk.bold.red(10)}`));
