// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your full name?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project\'s title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Provide installation instrucitons for your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information for your project.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide contribution guidelines for your project.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide test instructions for your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your project.',
        choices: ['License 1', 'License 2', 'License 3', 'License 4', 'License 5']
    }
];

// Prompt user to answer questions
function promptUser() {
    return inquirer
        .prompt(questions);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    promptUser().then(answers => {
        console.log(answers);
    })
}

// Function call to initialize app
init();
