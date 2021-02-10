// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { kMaxLength } = require('buffer');
var readMeContent;

// Construct an array of questions for user input
const questions = [
    'What is the title of your project?', 
    'Please provide a brief description of your project...',
    'Please provide any necessary installation instructions...',
    'Please specify any usage information...',
    'Please provide any contribution guidelines...',
    'Please provide any necessary test instructions...',
    'Please choose a desired license for your project...',
    'Please enter your GitHub username...',
    'Please enter your email address...'
];

//Construct an array of potential/popular license options
const licenseArray = [
    'Apache 2.0 License', 
    'Boost Software License 1.0', 
    'BSD 3-Clause License',  
    'BSD 2-Clause License', 
    'GNU GPL v3',
    'MIT', 
    'Mozilla Public License 2.0', 
    'The Unlicense', 
    'Eclipse Public License 1.0'
]; 

//Inquirer prompt sequency
inquirer
    .prompt([
        {
            name: 'title',
            type: 'input',
            message: questions[0],
        },
        {
            name: 'description',
            type: 'input',
            message: questions[1],
        },
        {
            name: 'install_instructions',
            type: 'input',
            message: questions[2],
        },
        {
            name: 'usage_guidelines',
            type: 'input',
            message: questions[3],
        },
        {
            name: 'contribution_instructions',
            type: 'input',
            message: questions[4],
        },
        {
            name: 'test_instructions',
            type: 'input',
            message: questions[5],
        },
        {
            name: 'desired_license',
            type: 'checkbox',
            message: questions[6],
            choices: licenseArray,
        },
        {
            name: 'GitHub_username',
            type: 'input',
            message: questions[7],
        },
        {
            name: 'email',
            type: 'input',
            message: questions[8],
        },
    ])

    //Waiting for prompt data and then generating markdown and writing to the resulting content to the readme file.
    .then((data) => {
        //console.log(data.title);
        // console.log(data.desired_license);
        readMeContent = generateMarkdown(data);
        // generateMarkdown(data);
        writeToFile(readMeContent, data);
        
        

    })
    


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', readMeContent, (err) =>
        err ? console.log(err) : console.log('Successfully generated README!'));
        
}



// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
