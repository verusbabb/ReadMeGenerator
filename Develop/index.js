// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?', 
    'What is a brief description of your project?',
    'What are the installation instructions?',
    'Please specify any usage information...',
    'Please provide any contribution guidelines...',
    'Please provide any necessary test instructions...',
    'Please choose a desired license for your project...',
    'Please enter your GitHub username...',
    'Please enter your email address...'
];

console.log(questions[0]);
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
