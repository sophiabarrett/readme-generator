// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    // {
    //     type: 'input',
    //     name: 'name',
    //     message: 'What is your full name?'
    // },
    // {
    //     type: 'input',
    //     name: 'github',
    //     message: 'What is your GitHub username?'
    // },
    // {
    //     type: 'input',
    //     name: 'email',
    //     message: 'What is your email address?'
    // },
    // {
    //     type: 'input',
    //     name: 'title',
    //     message: 'What is your project\'s title?'
    // },
    // {
    //     type: 'input',
    //     name: 'description',
    //     message: 'Provide a description of your project.'
    // },
    // {
    //     type: 'input',
    //     name: 'install',
    //     message: 'Provide installation instrucitons for your project.'
    // },
    // {
    //     type: 'input',
    //     name: 'usage',
    //     message: 'Provide usage information for your project.'
    // },
    // {
    //     type: 'input',
    //     name: 'contribute',
    //     message: 'Provide contribution guidelines for your project.'
    // },
    // {
    //     type: 'input',
    //     name: 'test',
    //     message: 'Provide test instructions for your project.'
    // },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your project.',
        choices: ['MIT', 'ISC', 'GNU', 'Apache']
    }
];

// Prompt user to answer questions
function promptUser() {
    return inquirer
        .prompt(questions);
}

// TODO: Create a function to write README file
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

// MOCK DATA FOR DEVELOPMENT
const mockData = {
    name: 'Sophie barrett',
    github: 'sophiabarrett',
    email: 'sophia@yoursummit.media',
    title: 'Professional README Generator',
    description: 'Command line app that generates a professional README file from user inputs.',
    install: 'Download to local machine and install packages.',
    usage: 'Anyone can use to make a quick README file.',
    contribute: 'Anyone can contribute!',
    test: 'For testing, download and install packages',
    license: 'ISC'
  };

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then(answers => {
        //return generateMarkdown(answers);
        return generateMarkdown(mockData);
    })
    .then(markdown => {
        return writeToFile('./dist/README.md', markdown);
    }).then(writeToFileResponse => {
        console.log(writeToFileResponse);
    })
}

// Function call to initialize app
init();
