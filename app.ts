#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

import gradientString from "gradient-string"

console.log (chalk.bold(gradientString('cyan','green','yellow','blue','pink')('*****Welcome to the Word Counter*****')));



let userAnswers :{

    sentence: string
}  = await inquirer.prompt([{

    name: "sentence",
    type: "input",
    message: chalk.bold.blueBright("Enter your sentence to count the words")

}])

let words = userAnswers.sentence.trim().split(" ")

// Print the array of the words to the console
 console.log(words);

// Print the word count of he sentence to the console


let wordcount= words.length

console.log (chalk.redBright(`The number of words in your sentence is ${words.length}`));

 