#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Display Welcome Message
console.log(chalk.bold.italic.blueBright("\n \t Welcome to Rakhail Codes-Word Counter\n"));
//Use prompt to enter the sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.bgGrey("Enter a Sentence"),
    }
]);
//Triming the sentence and split it into words based on spaces
let words = answers.sentence.trim().split(" ");
//analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.italic.magentaBright(words.length)}`));
console.log("=".repeat(60));
