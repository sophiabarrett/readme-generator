// Import packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Setup questions for user input
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
        message: 'Provide installation instructions for your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information for your project.'
    },
    {
        type: 'input',
        name: 'contribute',
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
        choices: ['MIT', 'GNU', 'Apache']
    }
];

// Prompt user to answer questions
function promptUser() {
    return inquirer
        .prompt(questions);
}

// Write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve('Success!');
        });
    });
}

// Function to initialize app
function init() {
    promptUser()
    .then(answers => {
        return generateMarkdown(answers);
    })
    .then(markdown => {
        return writeToFile('./dist/README.md', markdown);
    }).then(writeToFileResponse => {
        console.log(writeToFileResponse);
    })
}

// Function call to initialize app
init();
