// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { kMaxLength } = require('buffer');
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
    'Apache-2.0', 
    'BSD-2-Clause', 
    'GPL-3.0',  
    'MIT', 
    'GNU_Library', 
    'MPL-2.0', 
    'CDDL-1.0', 
    'EPL-2.0'
]; 
    

    // ['Apache-2.0', 'http://www.apache.org/licenses/LICENSE-2.0'],
    // ['BSD-2-Clause', 'https://www.tldrlegal.com/l/freebsd'],
    // ['GPL-3.0', 'https://www.gnu.org/licenses/gpl-3.0.en.html'],
    // ['MIT', 'https://choosealicense.com/licenses/mit/'],
    // ['GNU_Library', 'https://www.gnu.org/licenses/lgpl-3.0.html'],
    // ['MPL-2.0', 'https://www.tldrlegal.com/l/mpl-2.0'],
    // ['CDDL-1.0', 'https://javaee.github.io/glassfish/LICENSE'],
    // ['EPL-2.0', 'https://www.eclipse.org/legal/epl-2.0/']

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
