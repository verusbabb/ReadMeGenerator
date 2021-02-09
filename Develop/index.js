// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
var readMeContent;
// const markDown = require('./utils/generateMarkdown.js');

// Create an array of questions for user input
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

const licenseArray = [
    'PBL', 
    'Apache_Style', 
    'BSD', 
    'MIT', 
    'GNU_Public', 
    'GNU_Library', 
    'Mozilla_Public',  
    'Eclipse', 
    'Proprietary'
];

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

    .then((data) => {
        console.log(data.title);
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
